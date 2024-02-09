import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
    prefix: 'v-',
    theme: {
        spacing: [
            'box-xs',
            'box-sm',
            'box',
            'box-md',
            'box-lg',
            'box-xl',
            'section',
            'section-md',
            'section-lg',
        ],
    },
    classGroups: {
        'font-size': [
            {
                text: [
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h1-tablet',
                    'h2-tablet',
                    'h3-tablet',
                    'h4-tablet',
                    'h5-tablet',
                    'copy-xs',
                    'copy',
                    'copy-tablet',
                    'label',
                    'sm',
                ],
            },
        ],
    },
    conflictingClassGroups: {},
});

export function cn(...inputs: ClassValue[]): ClassValue {
    return customTwMerge(clsx(inputs));
}

export function getBorder(index: number) {
    if (!index) {
        return 'v-border-b v-border-t';
    }

    return 'v-border-b';
}
