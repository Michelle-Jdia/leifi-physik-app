import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { articleInfoSlideProps } from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';

describe('VArticleInfoSlide', () => {
    test('shows text that was passed to all props and shows 1 slide option', () => {
        const { getByText, getByTestId, queryByTestId } = render(VArticleInfoSlide, {
            props: {
                ...articleInfoSlideProps,
            },
        });

        getByText(articleInfoSlideProps.branch.title);
        getByText(articleInfoSlideProps.title);
        getByText(articleInfoSlideProps.subTitle);

        getByTestId('article-info-favorite');

        expect(queryByTestId('article-info-create')).toBeFalsy();
        expect(queryByTestId('article-info-delete')).toBeFalsy();
    });

    test('renders all slide options', async () => {
        const { getByTestId } = render(VArticleInfoSlide, {
            props: {
                ...articleInfoSlideProps,
                isLearnMode: true,
            },
        });

        getByTestId('article-info-favorite');
        getByTestId('article-info-create');
        getByTestId('article-info-delete');
    });

    test('emits correct events', async () => {
        const wrapper = mount(VArticleInfoSlide, {
            props: {
                ...articleInfoSlideProps,
                isLearnMode: true,
            },
        });

        await wrapper.find('[data-testid=article-info-create]').trigger('click');
        await wrapper.find('[data-testid=article-info-delete]').trigger('click');
        await wrapper.find('[data-testid=article-info-favorite]').trigger('click');

        const emitted = wrapper.emitted();

        expect(emitted.onCreate).toEqual([[articleInfoSlideProps.id]]);
        expect(emitted.onDelete).toEqual([[articleInfoSlideProps.id]]);
        // @todo figure our how to test emit callback
        // idea using JSON.stringify on both sides
        // expect(emitted.onFavorite).toBe([[articleInfoSlideProps.id, function closeSlide() {}]]);
    });

    testSnapshot(VArticleInfoSlide, {
        slots: {
            default: articleInfoSlideProps.branch,
        },
        props: {
            ...articleInfoSlideProps,
        },
    });
});
