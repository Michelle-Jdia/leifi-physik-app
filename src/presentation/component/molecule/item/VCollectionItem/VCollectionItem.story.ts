import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import { topic } from '@/presentation/static/topic';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';

export default {
    component: VCollectionItem,
} as Meta<typeof VCollectionItem>;

const Template: StoryFn<typeof VCollectionItem> = (args) => ({
    components: {
        VCollectionItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-collection-item v-bind="args"></v-collection-item>
    `,
});

export const Base = Template.bind({});

export const WithIcon = Template.bind({});

Base.args = {
    title: topic.title,
    branch: {
        title: branch.title,
        color: '',
    },
};

WithIcon.args = {
    title: topic.title,
};
