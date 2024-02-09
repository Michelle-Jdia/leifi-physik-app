import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import { topicBoxSliderProps } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider';
import VTopicBoxSlider from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';

describe('VTopicBoxSlider', () => {
    const options = {
        slots: {
            default: branch.title,
        },
        props: {
            link: topicBoxSliderProps.link,
            branchImg: topicBoxSliderProps.branchImg,
            sliderItems: [topicBoxSliderProps.sliderItem],
            color: topicBoxSliderProps.color,
        },
    };

    test('shows text that was passed to default slot', () => {
        const { getByText } = render(VTopicBoxSlider, options);

        getByText(branch.title);
    });

    test('doesnt render defaul slot if nothing was passed to it', () => {
        const { queryByText } = render(VTopicBoxSlider, {
            ...options,
            slots: {},
        });

        expect(queryByText(branch.title)).toBeFalsy();
    });

    testSnapshot(VTopicBoxSlider, options);
});
