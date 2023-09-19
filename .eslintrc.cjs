require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:storybook/recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended',
        '@vue/eslint-config-typescript/recommended',
        'plugin:tailwindcss/recommended',
        '@vue/eslint-config-prettier',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
        },
    ],
    rules: {
        'vue/no-v-html': 'off',
        'vue/padding-line-between-tags': [
            'error',
            [
                {
                    blankLine: 'always',
                    prev: '*',
                    next: '*',
                },
            ],
        ],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
                ignores: [],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
        'tailwindcss/no-custom-classname': 'off',
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-eval': 'error',
        'no-alert': 'error',
        'no-var': 'error',
        'no-restricted-imports': [
            'error',
            {
                patterns: ['./', '../'],
            },
        ],
        'no-await-in-loop': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'always'],
        'no-return-await': 'error',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1,
                },
            },
        ],
        'max-depth': ['error', 3],
        'no-else-return': [
            'error',
            {
                allowElseIf: false,
            },
        ],
        'eol-last': ['error', 'always'],
        'prefer-template': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['if'],
                next: ['*'],
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['if'],
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['return'],
            },
            {
                blankLine: 'always',
                prev: ['import'],
                next: ['*'],
            },
            {
                blankLine: 'never',
                prev: ['import'],
                next: ['import'],
            },
            {
                blankLine: 'never',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            },
            {
                blankLine: 'always',
                prev: [
                    'block',
                    'block-like',
                    'multiline-block-like',
                    'multiline-expression',
                    'multiline-const',
                ],
                next: ['const', 'let'],
            },
            {
                blankLine: 'always',
                prev: ['const', 'let'],
                next: [
                    'block',
                    'block-like',
                    'multiline-block-like',
                    'multiline-expression',
                    'multiline-const',
                ],
            },
            {
                blankLine: 'always',
                prev: [
                    'block',
                    'block-like',
                    'multiline-block-like',
                    'multiline-expression',
                    'multiline-const',
                    'export',
                ],
                next: [
                    'block',
                    'block-like',
                    'multiline-block-like',
                    'multiline-expression',
                    'multiline-const',
                    'export',
                ],
            },
        ],
    },
};
