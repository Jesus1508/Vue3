import { tesloApi } from '@/api/tesloApi';
import { loginAction } from '@/modules/auth/actions';
import { createUpdateProductAction } from '@/modules/products/actions';
import type { Product } from '@/modules/products/interfaces/product.interface';
import path from 'path';
import fs from 'fs';

describe('createUpdateProductAction', () => {
  beforeAll(async () => {
    const resp = await loginAction('test1@google.com', 'Abc123');
    if (!resp.ok) {
      throw new Error('Failed to login');
    }

    localStorage.setItem('token', resp.token);
  });

  test('should create a new product', async () => {
    const product: Product = {
      id: '',
      title: 'Nuevo producto',
      price: 100,
      description: 'Descripcion product',
      slug: '',
      stock: 10,
      sizes: [],
      gender: 'kid',
      tags: [],
      images: [],
      user: {} as any,
    };

    const resp = await createUpdateProductAction(product);
    // console.log(resp);
    await tesloApi.delete(`/products/${resp.id}`);

    expect(resp).toEqual({
      description: 'Descripcion product',
      gender: 'kid',
      id: expect.any(String),
      images: [],
      price: 100,
      sizes: [],
      slug: 'nuevo_producto',
      stock: 10,
      tags: [],
      title: 'Nuevo producto',
      user: {
        email: 'test1@google.com',
        fullName: 'Test One',
        id: expect.any(String),
        isActive: true,
        roles: expect.any(Array),
      },
    });
  });

  test('should update a product', async () => {
    const products = await tesloApi.get<Product[]>('/products');
    const product = products.data[0];
    const productId = product.id;

    const updateProduct = {
      ...product,
      title: 'Updated title',
      description: 'Updated descripcion',
      stock: 10,
    };

    const resp = await createUpdateProductAction(updateProduct);

    // expect(resp).toEqual({
    //   id: productId,
    //   title: 'Updated title',
    //   price: 35,
    //   description: 'Updated descripcion',
    //   slug: 'women_large_wordmark_short_sleeve_crew_neck_tee',
    //   stock: 10,
    //   sizes: ['XL', 'XXL'],
    //   gender: 'women',
    //   tags: ['shirt'],
    //   user: expect.anything(),
    //   images: ['8765115-00-A_1.jpg', '8765115-00-A_0_2000.jpg'],
    // });

    expect(resp).toEqual(
      expect.objectContaining({
        ...product,
        id: productId,
        title: 'Updated title',
        description: 'Updated descripcion',
        stock: 10,
      }),
    );
  });

  test('should upload product image', async () => {
    const imagePath = path.join(__dirname, '../../../fake/t-shirt.jpg');
    const imageBuffer = fs.readFileSync(imagePath);
    const imageFile = new File([imageBuffer], 't-shirt.jpg', { type: 'image/jpeg' });
    const product: Product = {
      id: '',
      title: 'Nuevo producto',
      price: 100,
      description: 'Descripcion product',
      slug: '',
      stock: 10,
      sizes: [],
      gender: 'kid',
      tags: [],
      images: [imageFile] as any,
      user: {} as any,
    };

    const { images, id } = await createUpdateProductAction(product);
    const [img1] = images;
    expect(typeof img1).toBe('string');

    await tesloApi.delete(`/products/${id}`);
  });
});
