import type { Meta, StoryFn } from '@storybook/vue3';
import VProfileInfoItem from '@/atom/VProfileInfoItem/VProfileInfoItem.vue';

export default {
    component: VProfileInfoItem,
} as Meta<typeof VProfileInfoItem>;

const Template: StoryFn<typeof VProfileInfoItem> = (args) => ({
    components: {
        VProfileInfoItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-profile-info-item v-bind="args">Profile info item</v-profile-info-item>
    `,
});

export const Base = Template.bind({});
