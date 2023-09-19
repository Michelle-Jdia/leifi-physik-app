/** @type {import('tailwindcss').Config} */
require('dotenv').config();
import { breakpoints } from './src/presentation/helper/breakpoint';

const defaultTheme = require('tailwindcss/defaultTheme');
const isDev = process.env.NODE_ENV !== 'production';
const componentsPath = './src/presentation/component/**/*.{html,js,ts,vue}';
const storiesPath = './src/presentation/story/**/*.ts';

function getDirsToScan() {
    if (isDev) {
        return [componentsPath, storiesPath];
    }

    return [componentsPath];
}

export default {
    content: getDirsToScan(),
    prefix: 'v-',
    darkMode: isDev ? 'class' : 'media',
    theme: {
        screens: {
            md: `${breakpoints.tablet}px`,
        },
        fontFamily: {
            // dont use sans in classes
            // https://tailwindcss.com/docs/font-family#customizing-the-default-font
            sans: ['ffmilowebpromed', ...defaultTheme.fontFamily.sans],
            base: 'ffmilowebpromed',
            light: 'ffmilowebprolight',
        },
        colors: {
            white: {
                DEFAULT: '#ffffff',
            },
            black: {
                DEFAULT: '#000000',
            },
            primary: {
                DEFAULT: 'var(--ion-color-primary)',
            },
            secondary: {
                DEFAULT: 'var(--ion-color-secondary)',
            },
            tertiary: {
                DEFAULT: 'var(--ion-color-tertiary)',
            },
            success: {
                DEFAULT: 'var(--ion-color-success)',
            },
            warning: {
                DEFAULT: 'var(--ion-color-warning)',
            },
            danger: {
                DEFAULT: 'var(--ion-color-danger)',
            },
            gray: {
                DEFAULT: 'var(--ion-color-gray-100)',
                50: 'var(--ion-color-gray-50)',
                20: 'var(--ion-color-gray-20)',
            },
            purple: {
                DEFAULT: 'var(--ion-color-purple-100)',
                80: 'var(--ion-color-purple-80)',
                50: 'var(--ion-color-purple-50)',
                20: 'var(--ion-color-purple-20)',
            },
            pink: {
                DEFAULT: 'var(--ion-color-pink-100)',
                80: 'var(--ion-color-pink-80)',
                50: 'var(--ion-color-pink-50)',
                20: 'var(--ion-color-pink-20)',
            },
            blue: {
                DEFAULT: 'var(--ion-color-blue-100)',
                80: 'var(--ion-color-blue-80)',
                50: 'var(--ion-color-blue-50)',
                20: 'var(--ion-color-blue-20)',
            },
            yellow: {
                DEFAULT: 'var(--ion-color-yellow-100)',
                80: 'var(--ion-color-yellow-80)',
                50: 'var(--ion-color-yellow-50)',
                20: 'var(--ion-color-yellow-20)',
            },
            green: {
                DEFAULT: 'var(--ion-color-green-100)',
                80: 'var(--ion-color-green-80)',
                50: 'var(--ion-color-green-50)',
                20: 'var(--ion-color-green-20)',
            },
            ty: {
                headline: 'var(--ty-headline)',
                helper: 'var(--ty-helper)',
                copy: 'var(--ty-copy)',
                cta: 'var(--ty-copy)',
            },
            transparent: 'transparent',
        },
        spacing: {
            px: '1px',
            0: '0',
            1: '0.125rem',
            2: '0.25rem',
            'box-xs': '0.375rem',
            'box-sm': '0.5rem',
            icon: '0.625rem',
            box: '0.75rem',
            'box-md': '1rem',
            'box-lg': '1.25rem',
            'box-xl': '1.5rem',
            section: '2.25rem',
            'section-md': '3rem',
            'section-lg': '4rem',
        },
        fontSize: {
            h1: '2rem',
            h2: '1.625rem',
            h3: '1.25rem',
            h4: '1rem',
            h5: '0.75rem',
            'h1-tablet': '2.25rem',
            'h2-tablet': '1.875rem',
            'h3-tablet': '1.5rem',
            'h4-tablet': '1.25rem',
            'h5-tablet': '1rem',
            'copy-xs': '0.625rem',
            copy: '1rem',
            'copy-tablet': '1.25rem',
            label: '0.875rem',
            sm: '0.875rem',
        },
        lineHeight: {
            default: '1.12rem',
            md: '1.5rem',
        },
        borderRadius: {
            sm: '4px',
            DEFAULT: '6px',
            md: '9px',
            lg: '24px',
        },
        extend: {
            zIndex: {
                loader: 100,
            },
        },
    },
    plugins: [],
};
