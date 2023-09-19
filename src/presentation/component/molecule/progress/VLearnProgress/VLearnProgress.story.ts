import type { Meta, StoryFn } from '@storybook/vue3';
import VLearnProgress from '@/molecule/progress/VLearnProgress/VLearnProgress.vue';

export default {
    component: VLearnProgress,
} as Meta<typeof VLearnProgress>;

const Template: StoryFn<typeof VLearnProgress> = (args) => ({
    components: {
        VLearnProgress,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-learn-progress v-bind="args"></v-learn-progress>
    `,
});

export const Base = Template.bind({});

Base.args = {
    current: 2,
    max: 10,
};
