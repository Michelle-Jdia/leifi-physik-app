import type { Meta, StoryFn } from '@storybook/vue3';
import VLearnStatusPopover from '@/atom/popover/VLearnStatusPopover/VLearnStatusPopover.vue';

export default {
    component: VLearnStatusPopover,
} as Meta<typeof VLearnStatusPopover>;

const Template: StoryFn<typeof VLearnStatusPopover> = (args) => ({
    components: {
        VLearnStatusPopover,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-learn-status-popover v-bind="args"/>
    `,
});

export const Base = Template.bind({});

Base.args = {};
