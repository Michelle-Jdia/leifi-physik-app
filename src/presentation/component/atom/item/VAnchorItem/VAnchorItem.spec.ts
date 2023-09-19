import { render } from '@testing-library/vue';
import { testSnapshot } from '@/presentation/helper/test';
import { describe, expect, test } from 'vitest';
import { branch } from '@/presentation/static/branch';
import VAnchorItem from '@/atom/item/VAnchorItem/VAnchorItem.vue';

describe('VAnchorItem', () => {
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
        const { getByText } = render(VAnchorItem, options);

        getByText(branch.title);
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText } = render(VAnchorItem, {
            ...options,
            slots: {},
        });

        expect(queryByText(branch.title)).toBeFalsy();
    });

    testSnapshot(VAnchorItem, options);
});
