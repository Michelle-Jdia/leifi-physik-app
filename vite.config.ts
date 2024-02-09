import type { Plugin } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import { configDefaults, defineConfig } from 'vitest/config';

const getPath = (pathToAlias) => path.resolve(__dirname, pathToAlias);
const componentPath = 'src/presentation/component';

// https://vitejs.dev/config/
export default ({ mode }) => {
    console.log(`running in ${mode} mode`);

    const isTest = mode === 'test';
    const isProd = mode === 'production';

    const ignoreComponentsInTestMode = (() => {
        if (!isTest) {
            return {};
        }

        return {
            isCustomElement: (name) => name.includes('router-link'),
        };
    })();

    function getPlugins(): Plugin[] {
        const VuePlugin = vue({
            template: {
                compilerOptions: {
                    ...ignoreComponentsInTestMode,
                },
            },
        });

        if (isTest) {
            return [VuePlugin];
        }

        if (isProd) {
            return [VuePlugin];
        }

        const VueChecker = checker({
            vueTsc: true,
            eslint: {
                lintCommand: 'eslint ./src/**/*.{ts,vue}',
            },
            stylelint: {
                lintCommand: 'stylelint ./src/**/*.{css,scss,vue}',
            },
            overlay: false,
        });

        return [VuePlugin, VueChecker];
    }

    return defineConfig({
        plugins: getPlugins(),
        resolve: {
            mainFields: ['module'],
            alias: {
                '@/src': path.resolve(__dirname, 'src'),
                '@/env': getPath('src/env'),
                '@/application': getPath('src/application'),
                '@/data': getPath('src/data'),
                '@/connection': getPath('src/connection'),
                '@/store': getPath('src/connection/store'),
                '@/state': getPath('src/connection/state'),
                '@/presentation': getPath('src/presentation'),
                '@/atom': getPath(`${componentPath}/atom`),
                '@/molecule': getPath(`${componentPath}/molecule`),
                '@/organism': getPath(`${componentPath}/organism`),
                '@/container': getPath(`${componentPath}/container`),
                '@/template': getPath(`${componentPath}/template`),
                '@/layout': getPath(`${componentPath}/layout`),
                '@/page': getPath(`${componentPath}/page`),
                '@/style': getPath('src/presentation/style'),
            },
        },
        test: {
            globals: true,
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, './src/test/e2e/**/*'],
            deps: {
                inline: ['clsx'],
            },
            reporters: ['default', 'html'],
            coverage: {
                enabled: true,
                provider: 'v8',
                include: [
                    'src/data/helper/*.ts',
                    'src/connection/helper/*.ts',
                    'src/presentation/component/**/*.vue',
                    'src/presentation/helper/**/*.ts',
                ],
                reportsDirectory: getPath('src/test-result/coverage'),
                reporter: ['text', 'html'],
            },
            outputFile: {
                html: getPath('src/test-result/unit/index.html'),
            },
        },

        // @todo check this
        // optimizeDeps: {
        //     include: ['axios', 'clsx'],
        // },
    });
};
