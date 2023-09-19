import type { Meta, StoryFn } from '@storybook/vue3';
import VAnchorItem from '@/atom/item/VAnchorItem/VAnchorItem.vue';
import { topic } from '@/presentation/static/topic';

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
