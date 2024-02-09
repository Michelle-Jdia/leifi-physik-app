import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import VTextIconItem from '@/atom/item/VTextIconItem/VTextIconItem.vue';

describe('VTextIconItem', () => {
    const options = {
        slots: {
            default: branch.title,
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows the correct text', () => {
        const { getByText } = render(VTextIconItem, options);

        getByText(branch.title);
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText } = render(VTextIconItem, {
            ...options,
            slots: {},
        });

        expect(queryByText(branch.title)).toBeFalsy();
    });

    testSnapshot(VTextIconItem, options);
});
