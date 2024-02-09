import { render } from '@testing-library/vue';
// import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import VLearnProgress from '@/molecule/progress/VLearnProgress/VLearnProgress.vue';

describe('VLearnProgress', () => {
    const options = {
        props: {
            isLearnMode: false,
            current: 2,
            max: 10,
        },
    };

    // test('progress bar is shown / hidden on toggle click', async () => {
    //     const { getByText, getByTestId, queryByTestId } = render(VLearnProgress, options);
    //
    //     await userEvent.click(getByTestId('toggle-progress-bar'));
    //
    //     getByText('2 von 10 Inhalten gelernt');
    //
    //     await userEvent.click(getByTestId('toggle-progress-bar'));
    //
    //     expect(queryByTestId('progress-bar')).toBeFalsy();
    // });

    test('progress bar is hidden by default', () => {
        const { queryByTestId } = render(VLearnProgress, options);

        expect(queryByTestId('progress-bar')).toBeFalsy();
    });

    testSnapshot(VLearnProgress, options);
});
