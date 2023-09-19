import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import { topicBoxSliderProps } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider';
import VTopicBoxSlider from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';

export default {
    component: VTopicBoxSlider,
    tags: ['autodocs'],
} as Meta<typeof VTopicBoxSlider>;

const Template: StoryFn<typeof VTopicBoxSlider> = (args) => ({
    components: {
        VTopicBoxSlider,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-topic-box-slider v-bind="args">
           ${branch.title}
        </v-topic-box-slider>
    `,
});

export const Base = Template.bind({});

Base.args = {
    branchImg: topicBoxSliderProps.branchImg,
    sliderItems: [
        topicBoxSliderProps.sliderItem,
        topicBoxSliderProps.sliderItem,
        topicBoxSliderProps.sliderItem,
    ],
    modifier: 'bg-green-50',
};
