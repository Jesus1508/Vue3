import { GIFResponse } from '../interfaces/gif.response';
import giphyApi from './10-axios';


export const getImage = async() => {

    try {
        const resp = await giphyApi.get<GIFResponse>('/random');
        return resp.data.data.images.downsized_large.url;
    } catch (error) {
        throw 'Url no encontrada'
    }

}

// export const getIamgePromise = () => {
//     return new Promise ( resolve => {
//         resolve ('url');
//     });
// }

getImage()
    .then( (url) => console.log({ url }) )
    .catch( err => { console.log(err) } )
// console.log(getIamgePromise());