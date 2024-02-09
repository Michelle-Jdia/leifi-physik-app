import type { Meta, StoryFn } from '@storybook/vue3';
import { topic } from '@/presentation/static/topic';
import VTextIconItem from '@/atom/item/VTextIconItem/VTextIconItem.vue';

export default {
    component: VTextIconItem,
} as Meta<typeof VTextIconItem>;

const Template: StoryFn<typeof VTextIconItem> = (args) => ({
    components: {
        VTextIconItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-text-icon-item v-bind="args">
            ${topic.title}
        </v-text-icon-item>
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
