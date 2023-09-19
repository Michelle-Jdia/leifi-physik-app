import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
    prefix: 'v-',
    theme: {
        spacing: ['box-xs', 'box-sm', 'box', 'box-md', 'box-lg', 'section', 'section-md'],
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
                ],
            },
        ],
    },
    conflictingClassGroups: {},
});

export function cn(...inputs: ClassValue[]): ClassValue {
    return customTwMerge(clsx(inputs));
}
