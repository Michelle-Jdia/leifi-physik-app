import type { Meta, StoryFn } from '@storybook/vue3';
import VProfileHeader from '@/atom/VProfileHeader/VProfileHeader.vue';

export default {
    component: VProfileHeader,
} as Meta<typeof VProfileHeader>;

const Template: StoryFn<typeof VProfileHeader> = (args) => ({
    components: {
        VProfileHeader,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-profileHeader v-bind="args">Profile header</v-profileHeader>
    `,
});

export const Base = Template.bind({});
