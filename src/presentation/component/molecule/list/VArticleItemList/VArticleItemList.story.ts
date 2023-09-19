import type { Meta, StoryFn } from '@storybook/vue3';
import VArticleItemList from '@/molecule/list/VArticleItemList/VArticleItemList.vue';

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
        <v-article-item-list v-bind="args"></v-article-item-list>
    `,
});

export const Base = Template.bind({});
