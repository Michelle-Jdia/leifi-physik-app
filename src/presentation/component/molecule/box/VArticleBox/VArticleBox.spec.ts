import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { topic } from '@/presentation/static/topic';
import { branch } from '@/presentation/static/branch';
import VArticleBox from '@/molecule/box/VArticleBox/VArticleBox.vue';

describe('VArticleBox', () => {
    const options = {
        slots: {
            default: branch.title,
        },
        props: {
            title: topic.title,
            subtitle: topic.subtitle,
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows the correct text', () => {
        const { getByText, queryByTestId } = render(VArticleBox, options);

        getByText(branch.title);
        getByText(topic.title);
        getByText(topic.subtitle);
        getByText('nicht gelernt');

        expect(queryByTestId('article-box-notification-icon')).toBeFalsy();
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText, getByTestId } = render(VArticleBox, {
            ...options,
            props: {
                title: '',
                isLearned: true,
                withNotification: true,
            },
            slots: {},
        });

        expect(queryByText(branch.title)).toBeFalsy();
        expect(queryByText(topic.title)).toBeFalsy();
        expect(queryByText(topic.subtitle)).toBeFalsy();
        expect(queryByText('nicht gelernt')).toBeFalsy();

        getByTestId('article-box-notification-icon');
    });

    testSnapshot(VArticleBox, options);
});
