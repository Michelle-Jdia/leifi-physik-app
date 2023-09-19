import '@/style/app.scss';
import type { Pinia } from 'pinia';
import type { App as VueApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@/src/app.vue';
import router from '@/presentation/router';

export function createAndHydrateStore(): Pinia {
    const pinia = createPinia();

    return pinia;
}

export function createVueApp(): VueApp {
    const pinia = createAndHydrateStore();
    const app = createApp(App).use(IonicVue).use(pinia).use(router);

    return app;
}

export function mountApplication() {
    const app = createVueApp();

    router.isReady().then(() => {
        app.mount('#app');
    });
}
