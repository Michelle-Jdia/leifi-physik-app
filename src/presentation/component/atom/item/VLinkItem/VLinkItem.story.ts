import type { Meta, StoryFn } from '@storybook/vue3';
import { topic } from '@/presentation/static/topic';
import VLinkItem from '@/atom/item/VLinkItem/VLinkItem.vue';

export default {
    component: VLinkItem,
} as Meta<typeof VLinkItem>;

const Template: StoryFn<typeof VLinkItem> = (args) => ({
    components: {
        VLinkItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-linkItem v-bind="args">
            ${topic.title}
        </v-linkItem>
    `,
});

export const Base = Template.bind({});

export const Green = Template.bind({});

export const Yellow = Template.bind({});

export const Red = Template.bind({});

Base.args = {};

Green.args = {
    level: 'green',
};

Yellow.args = {
    level: 'yellow',
};

Red.args = {
    level: 'red',
};
