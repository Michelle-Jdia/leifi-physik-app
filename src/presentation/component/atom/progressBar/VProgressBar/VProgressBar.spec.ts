import { render } from '@testing-library/vue';
import { testSnapshot } from '@/presentation/helper/test';
import { describe, test } from 'vitest';
import VProgressBar from '@/atom/progressBar/VProgressBar/VProgressBar.vue';

describe('VProgressBar', () => {
    const options = {
        props: {
            max: 3,
            current: 3,
        },
    };

    test('shows the correct text', () => {
        const { getByText } = render(VProgressBar, options);

        getByText('3 von 3 Inhalten gelernt');
    });

    testSnapshot(VProgressBar, options);
});
