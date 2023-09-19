import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';

describe('VBranchHeader', () => {
    const options = {
        slots: {
            default: branch.title,
        },
    };

    test('shows text that was passed to the slot', () => {
        const { getByText } = render(VBranchHeader, options);

        getByText(branch.title);
    });

    test('show / hide the search bar', async () => {
        const { getByRole, getByTestId, queryByRole } = render(VBranchHeader);

        expect(queryByRole('textbox')).toBeFalsy();

        await userEvent.click(getByTestId('open-search-button'));
        await userEvent.type(getByRole('textbox'), branch.title);

        getByRole('textbox');

        await userEvent.click(getByTestId('close-search-button'));

        expect(queryByRole('textbox')).toBeFalsy();
    });

    testSnapshot(VBranchHeader, options);
});
