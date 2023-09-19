import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import { topic } from '@/presentation/static/topic';
import VArticleEditItem from '@/molecule/item/VArticleEditItem/VArticleEditItem.vue';

describe('VArticleEditItem', () => {
    const options = {
        props: {
            id: '1',
            title: branch.title,
            subtitle: topic.subtitle,
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows the correct text', () => {
        const { getByText, queryByTestId } = render(VArticleEditItem, options);

        getByText(branch.title);
        getByText(topic.subtitle);

        expect(queryByTestId('article-edit-item-copy')).toBeFalsy();
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText, getByTestId } = render(VArticleEditItem, {
            ...options,
            props: {
                ...options.props,
                title: '',
                subtitle: '',
                withCopy: true,
            },
        });

        expect(queryByText(branch.title)).toBeFalsy();
        expect(queryByText(topic.subtitle)).toBeFalsy();

        getByTestId('article-edit-item-copy');
    });

    testSnapshot(VArticleEditItem, options);
});
