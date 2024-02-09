import { defineConfig } from 'taze';

export default defineConfig({
    exclude: [
        // issues
        'storybook',
        '@storybook/*',
        'prettier',
        '@vue/eslint-config-prettier',
        'eslint-config-prettier',
        'prettier-plugin-tailwindcss',
        'typescript',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',

        // risky
        'meow',
        '@ionic/core',
        '@ionic/vue',
        '@ionic/vue-router',
        '@capacitor/android',
        '@capacitor/core',
        '@capacitor/ios',
        '@capacitor/cli',
    ],
    force: true,
    write: true,
    install: true,
});
