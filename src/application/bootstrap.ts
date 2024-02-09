import '@/style/app.scss';
import type { Pinia } from 'pinia';
import type { App as VueApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import debounce from 'debounce';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@/src/app.vue';
import { startMathJax } from '@/application/mixin/mathjax';
import { startDatabaseMigration } from '@/application/system/migration';
import router from '@/connection/router';

export function createPiniaStore(): Pinia {
    const pinia = createPinia();

    return pinia;
}

export function createVueApp(): VueApp {
    const pinia = createPiniaStore();
    const app = createApp(App).use(IonicVue).use(pinia).use(router);

    return app;
}

export function mountApplication(): void {
    const app = createVueApp();
    const debouncedMathjax = debounce(startMathJax, 20);

    app.mixin({
        updated() {
            debouncedMathjax();
        },
    });

    // use this to remove all warning in dev, because I am getting 15k warnings that slow down the app on issue pages becuase of swiffy
    // app.config.warnHandler = () => {};

    startDatabaseMigration().then(() => {
        router.isReady().then(() => {
            app.mount('#app');
        });
    });
}
