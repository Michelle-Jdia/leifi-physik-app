import type { Meta, StoryFn } from '@storybook/vue3';
import { ContentType } from '@/data/type/helper/contentType';
import VArticleItemList from '@/container/list/VArticleItemList/VArticleItemList.vue';

export default {
    component: VArticleItemList,
} as Meta<typeof VArticleItemList>;

const Template: StoryFn<typeof VArticleItemList> = (args) => ({
    components: {
        VArticleItemList,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-article-item-list v-bind="args" />
    `,
});

export const Base = Template.bind({});

const ids = ['4958cb2c-00a1-465e-ab41-1cc048b7e90b', '77c55ea1-5d06-4c91-9f51-b3ccd24be1c7'];

Base.args = {
    items: ids.map((id) => {
        return {
            id,
            type: ContentType.ISSUE,
        };
    }),
};
