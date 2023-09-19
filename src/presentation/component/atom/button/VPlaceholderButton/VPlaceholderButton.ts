import { render } from '@testing-library/vue';
import { describe, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import VPlaceholderButton from '@/atom/button/VPlaceholderButton/VPlaceholderButton.vue';

describe('VPlaceholderButton', () => {
    const options = {
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows the default text', () => {
        const { getByText } = render(VPlaceholderButton, options);

        getByText('Alle Inhalte durchsuchen');
    });

    test('shows text for the type of "add"', () => {
        const { getByText } = render(VPlaceholderButton, {
            ...options,
            props: {
                type: 'add',
            },
        });

        getByText('Artikel hinzufügen');
    });

    testSnapshot(VPlaceholderButton, options);
    testSnapshot(VPlaceholderButton, {
        ...options,
        props: {
            type: 'add',
        },
    });
});
