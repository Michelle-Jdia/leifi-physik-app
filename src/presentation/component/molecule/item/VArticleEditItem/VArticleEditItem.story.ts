import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import { topic } from '@/presentation/static/topic';
import VArticleEditItem from '@/molecule/item/VArticleEditItem/VArticleEditItem.vue';

export default {
    component: VArticleEditItem,
} as Meta<typeof VArticleEditItem>;

const Template: StoryFn<typeof VArticleEditItem> = (args) => ({
    components: {
        VArticleEditItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `<v-article-edit-item v-bind="args"></v-article-edit-item>`,
});

export const Base = Template.bind({});

export const WithCopy = Template.bind({});

const defaultArgs = {
    id: '1',
    title: branch.title,
    subtitle: topic.subtitle,
};

Base.args = defaultArgs;

WithCopy.args = {
    ...defaultArgs,
    withCopy: true,
};
