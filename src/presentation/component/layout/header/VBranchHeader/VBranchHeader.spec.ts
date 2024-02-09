// import userEvent from '@testing-library/user-event';
// import { render } from '@testing-library/vue';
import { describe } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';

describe('VBranchHeader', () => {
    const options = {
        props: {
            isSearchEnabled: true,
        },
        slots: {
            default: branch.title,
        },
    };

    // test('shows text that was passed to the slot', () => {
    //     const { getByText } = render(VBranchHeader, options);
    //     getByText(branch.title);
    // });
    // @todo make this work again
    // test('show / hide the search bar', async () => {
    //     const { getByRole, getByTestId, queryByRole } = render(VBranchHeader, options);
    //     expect(queryByRole('textbox')).toBeFalsy();
    //     await userEvent.click(getByTestId('open-search-button'));
    //     await userEvent.type(getByRole('textbox'), branch.title);
    //     getByRole('textbox');
    //     await userEvent.click(getByTestId('close-search-button'));
    //     expect(queryByRole('textbox')).toBeFalsy();
    // });
    testSnapshot(VBranchHeader, options);
});
