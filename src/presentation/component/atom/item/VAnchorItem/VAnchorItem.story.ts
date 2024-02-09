import type { Meta, StoryFn } from '@storybook/vue3';
import { topic } from '@/presentation/static/topic';
import VAnchorItem from '@/atom/item/VAnchorItem/VAnchorItem.vue';

export default {
    component: VAnchorItem,
} as Meta<typeof VAnchorItem>;

const Template: StoryFn<typeof VAnchorItem> = (args) => ({
    components: {
        VAnchorItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-anchorItem v-bind="args">
            ${topic.title}
        </v-anchorItem>
    `,
});

export const Base = Template.bind({});

Base.args = {};
