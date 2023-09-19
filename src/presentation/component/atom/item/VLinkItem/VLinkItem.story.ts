import type { Meta, StoryFn } from '@storybook/vue3';
import VLinkItem from '@/atom/item/VLinkItem/VLinkItem.vue';
import { topic } from '@/presentation/static/topic';

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

Base.args = {};
