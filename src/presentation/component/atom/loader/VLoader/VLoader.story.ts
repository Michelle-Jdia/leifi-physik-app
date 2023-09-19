import type { Meta, StoryFn } from '@storybook/vue3';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

export default {
    component: VLoader,
} as Meta<typeof VLoader>;

const Template: StoryFn<typeof VLoader> = (args) => ({
    components: {
        VLoader,
    },
    setup() {
        return {
            args,
        };
    },
    template: `<v-loader v-bind="args"></v-loader>`,
});

export const Base = Template.bind({});

Base.args = {
    logs: ['storybook'],
};
