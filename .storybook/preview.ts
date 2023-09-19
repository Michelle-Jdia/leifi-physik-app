import '@/style/storybook.scss';
import { type Preview, setup } from '@storybook/vue3';
import { withThemeByClassName } from '@storybook/addon-styling';
import { type App } from 'vue';
// import { vueRouter } from 'storybook-vue3-router';
import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

setup((app: App) => {
    app.use(IonicVue).use(pinia);
});

pinia.state.value = {
    log: {
        state: {
            logs: new Set(['storybook']),
        },
    },
};

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'light',
        },
        actions: {
            argTypesRegex: '^on.*',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        // vueRouter()
        withThemeByClassName({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
};

export default preview;
