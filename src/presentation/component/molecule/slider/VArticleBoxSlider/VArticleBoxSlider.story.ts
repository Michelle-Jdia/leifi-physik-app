import type { Meta, StoryFn } from '@storybook/vue3';
import { articleBoxSliderProps } from '@/molecule/slider/VArticleBoxSlider/VArticleBoxSlider';
import { topic } from '@/presentation/static/topic';
import VArticleBoxSlider from '@/molecule/slider/VArticleBoxSlider/VArticleBoxSlider.vue';

export default {
    component: VArticleBoxSlider,
    tags: ['autodocs'],
} as Meta<typeof VArticleBoxSlider>;

const Template: StoryFn<typeof VArticleBoxSlider> = (args) => ({
    components: {
        VArticleBoxSlider,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-article-box-slider v-bind="args">
          ${topic.title}
        </v-article-box-slider>
    `,
});

export const Base = Template.bind({});

const colors = ['bg-yellow-50', 'bg-pink-50', 'bg-blue-50'];

Base.args = {
    lastBox: articleBoxSliderProps.lastBox,
    sliderItems: colors.map((color, index) => ({
        title: articleBoxSliderProps.sliderItem.title,
        subtitle: articleBoxSliderProps.sliderItem.subtitle,
        link: articleBoxSliderProps.sliderItem.link,
        badge: {
            title: articleBoxSliderProps.sliderItem.badge.title,
            color,
        },
        isLearned: Boolean(index % 2),
        withNotification: Boolean(index % 3),
    })),
    modifier: 'bg-green-50',
};
