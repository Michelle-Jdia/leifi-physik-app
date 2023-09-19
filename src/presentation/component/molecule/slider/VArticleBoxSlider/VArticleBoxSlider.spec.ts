import { render } from '@testing-library/vue';
import { testSnapshot } from '@/presentation/helper/test';
import { describe, expect, test } from 'vitest';
import { topic } from '@/presentation/static/topic';
import { articleBoxSliderProps } from '@/molecule/slider/VArticleBoxSlider/VArticleBoxSlider';
import VArticleBoxSlider from '@/molecule/slider/VArticleBoxSlider/VArticleBoxSlider.vue';

describe('VArticleBoxSlider', () => {
    const options = {
        slots: {
            default: topic.copy,
        },
        props: {
            lastBox: articleBoxSliderProps.lastBox,
            sliderItems: [
                articleBoxSliderProps.sliderItem,
                articleBoxSliderProps.sliderItem,
                articleBoxSliderProps.sliderItem,
            ],
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('shows text that was passed to default slot', () => {
        const { getAllByText } = render(VArticleBoxSlider, options);

        getAllByText(topic.copy);

        expect(getAllByText(articleBoxSliderProps.sliderItem?.title as string)).toHaveLength(3);
    });

    test('doesnt render defaul slot if nothing was passed to it', () => {
        const { queryByText } = render(VArticleBoxSlider, {
            ...options,
            slots: {},
        });

        expect(queryByText(topic.copy)).toBeFalsy();
    });

    testSnapshot(VArticleBoxSlider, options);
});
