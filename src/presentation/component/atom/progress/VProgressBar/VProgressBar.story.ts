import type { Meta, StoryFn } from '@storybook/vue3';
import VProgressBar from '@/atom/progress/VProgressBar/VProgressBar.vue';

export default {
    component: VProgressBar,
} as Meta<typeof VProgressBar>;

const Template: StoryFn<typeof VProgressBar> = (args) => ({
    components: {
        VProgressBar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-progress-bar v-bind="args"></v-progress-bar>
    `,
});

export const Base = Template.bind({});

Base.args = {
    max: 5,
    current: 2,
};
