import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import { plugin } from 'postcss';

describe('index router', () => {
    const wrapper = mount(App, {
        global: {
            plugins: [router],
        },
    });
    test('renders HomePage when visiting /', async () => {
        await router.isReady();
    });
});
