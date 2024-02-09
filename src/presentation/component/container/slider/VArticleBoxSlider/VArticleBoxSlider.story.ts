import type { Meta, StoryFn } from '@storybook/vue3';
import { ContentType } from '@/data/type/helper/contentType';
import { topic } from '@/presentation/static/topic';
import { articleBoxSliderProps } from '@/container/slider/VArticleBoxSlider/VArticleBoxSlider';
import VArticleBoxSlider from '@/container/slider/VArticleBoxSlider/VArticleBoxSlider.vue';

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

const ids = ['4958cb2c-00a1-465e-ab41-1cc048b7e90b', '77c55ea1-5d06-4c91-9f51-b3ccd24be1c7'];

Base.args = {
    lastBox: articleBoxSliderProps.lastBox,
    sliderItems: ids.map((id) => ({
        id,
        type: ContentType.ISSUE,
    })),
    modifier: 'bg-green-50',
};
