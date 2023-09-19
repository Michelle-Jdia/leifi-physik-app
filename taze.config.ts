import { defineConfig } from 'taze';

export default defineConfig({
    exclude: ['storybook', '@storybook/*', 'typescript'],
    force: true,
    write: true,
    install: true,
});
