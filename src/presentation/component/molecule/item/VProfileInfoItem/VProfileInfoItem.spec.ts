import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import VProfileInfoItem from '@/molecule/item/VProfileInfoItem/VProfileInfoItem.vue';

describe('VProfileInfoItem', () => {
    const options = {
        slots: {
            default: 'Mia',
        },
    };

    test('shows the correct text', () => {
        const { getByText } = render(VProfileInfoItem, options);

        getByText('Mia');
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText } = render(VProfileInfoItem, {
            ...options,
            props: {
                value: '',
            },
            slots: {},
        });

        expect(queryByText('Mia')).toBeFalsy();
    });

    testSnapshot(VProfileInfoItem, options);
});
