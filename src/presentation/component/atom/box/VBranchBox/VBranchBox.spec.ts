import { render } from '@testing-library/vue';
import { testSnapshot } from '@/presentation/helper/test';
import { describe, expect, test } from 'vitest';
import { branch } from '@/presentation/static/branch';
import VBranchBox from '@/atom/box/VBranchBox/VBranchBox.vue';

describe('VBranchBox', () => {
    const options = {
        slots: {
            default: branch.title,
        },
        props: {
            img: branch.img,
        },
    };

    test('shows the correct text', () => {
        const { getByText } = render(VBranchBox, options);

        getByText(branch.title);
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText } = render(VBranchBox, {
            ...options,
            slots: {},
        });

        expect(queryByText(branch.title)).toBeFalsy();
    });

    testSnapshot(VBranchBox, options);
});
