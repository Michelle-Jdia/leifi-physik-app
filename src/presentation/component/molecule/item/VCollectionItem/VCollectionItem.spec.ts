import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { topic } from '@/presentation/static/topic';
import { branch } from '@/presentation/static/branch';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';

describe('VCollectionItem', () => {
    const options = {
        props: {
            title: topic.title,
            branch: {
                title: branch.title,
                color: '',
            },
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows the correct text', () => {
        const { getByText, queryByTestId } = render(VCollectionItem, options);

        getByText(topic.title);
        getByText(branch.title);

        expect(queryByTestId('collection-item-notification')).toBeFalsy();
        expect(queryByTestId('collection-item-feed')).toBeFalsy();
    });

    test('doesnt show the text if it was not passed', () => {
        const { queryByText, getByTestId } = render(VCollectionItem, {
            ...options,
            props: {
                title: '',
                withNotification: true,
            },
        });

        expect(queryByText(topic.title)).toBeFalsy();
        expect(queryByText(branch.title)).toBeFalsy();

        getByTestId('collection-item-notification');
        getByTestId('collection-item-feed');
    });

    testSnapshot(VCollectionItem, options);
});
