import type { Meta, StoryFn } from '@storybook/vue3';
import { ContentType } from '@/data/type/helper/contentType';
import { articleInfoSlideProps } from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';

export default {
    component: VArticleInfoSlide,
    argTypes: {
        onOnDelete: {},
        onOnCreate: {},
        onOnFavorite: {},
    },
} as Meta<typeof VArticleInfoSlide>;

const Template: StoryFn<typeof VArticleInfoSlide> = (args) => ({
    components: {
        VArticleInfoSlide,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-article-info-slide v-bind="args"/>
    `,
});

export const Base = Template.bind({});

export const Topic = Template.bind({});

Base.args = {
    ...articleInfoSlideProps,
    type: ContentType.ISSUE,
};

Topic.args = {
    ...articleInfoSlideProps,
    type: ContentType.ISSUE,
    isTopic: true,
};
