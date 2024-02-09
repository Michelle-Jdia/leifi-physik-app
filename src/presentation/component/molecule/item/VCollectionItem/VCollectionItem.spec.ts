import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { collection } from '@/presentation/static/collection';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';

describe('VCollectionItem', () => {
    const options = {
        props: {
            subtitle: collection.title,
            privateTitle: collection.private_title,
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows the correct text without icons', () => {
        const { getByText, queryByTestId } = render(VCollectionItem, options);

        getByText(collection.title);
        getByText(collection.private_title);

        expect(queryByTestId('collection-item-notification')).toBeFalsy();
        expect(queryByTestId('collection-item-feed')).toBeFalsy();
    });

    test('does not show the text if there was no text passed', () => {
        const { queryByText, queryByTestId } = render(VCollectionItem, {
            ...options,
            props: {
                subtitle: '',
                privateTitle: '',
            },
        });

        expect(queryByText(collection.title)).toBeFalsy();
        expect(queryByText(collection.private_title)).toBeFalsy();

        expect(queryByTestId('collection-item-notification')).toBeFalsy();
        expect(queryByTestId('collection-item-feed')).toBeFalsy();
    });

    test('subscribed icon shows up', () => {
        const { queryByTestId } = render(VCollectionItem, {
            ...options,
            props: {
                ...options.props,
                isSubscribed: true,
            },
        });

        expect(queryByTestId('collection-item-notification')).toBeFalsy();
        queryByTestId('collection-item-feed');
    });

    test('subscribed icon + notification icon show up', () => {
        const { queryByTestId } = render(VCollectionItem, {
            ...options,
            props: {
                ...options.props,
                isSubscribed: true,
                withNotification: true,
            },
        });

        queryByTestId('collection-item-notification');
        queryByTestId('collection-item-feed');
    });

    test('my collection without icons or text', () => {
        const { queryByTestId } = render(VCollectionItem, {
            ...options,
            props: {
                ...options.props,
                isMyCollection: true,
                isLearnMode: false,
            },
        });

        queryByTestId('collection-item-notification');
        queryByTestId('collection-item-feed');
    });

    test('my collection with learn mode status', () => {
        const { queryByTestId } = render(VCollectionItem, {
            ...options,
            props: {
                ...options.props,
                isMyCollection: true,
                isLearnMode: true,
            },
        });

        queryByTestId('collection-item-notification');
        queryByTestId('collection-item-feed');
    });

    testSnapshot(VCollectionItem, options);
});
