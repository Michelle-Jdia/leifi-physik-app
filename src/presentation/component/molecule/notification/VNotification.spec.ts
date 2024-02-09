import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import { topic } from '@/presentation/static/topic';
import VNotification from '@/molecule/notification/VNotification.vue';

describe('VNotification', () => {
    const options = {
        slots: {
            default: topic.title,
        },
        props: {
            date: '2023',
            type: branch.title,
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows notification icon if "withNotification" is true', () => {
        const { getByTestId } = render(VNotification, {
            ...options,
            props: {
                ...options.props,
                withNotification: true,
            },
        });

        getByTestId('notification-icon');
    });

    test('does not show notification icon if "withNotification" is false', () => {
        const { queryByTestId } = render(VNotification, options);

        expect(queryByTestId('notification-icon')).toBeFalsy();
    });

    test('shows the correct text', () => {
        const { getByText } = render(VNotification, options);

        getByText(topic.title);
        getByText('2023');
        getByText(branch.title);
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText } = render(VNotification, {
            ...options,
            props: {
                date: '',
                type: '',
                withNotification: true,
            },
            slots: {},
        });

        expect(queryByText(topic.title)).toBeFalsy();
        expect(queryByText('2023')).toBeFalsy();
        expect(queryByText(branch.title)).toBeFalsy();
    });

    testSnapshot(VNotification, options);
});
