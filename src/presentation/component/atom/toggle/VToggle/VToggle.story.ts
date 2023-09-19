import type { Meta, StoryFn } from '@storybook/vue3';
import VToggle from '@/atom/toggle/VToggle/VToggle.vue';

export default {
    component: VToggle,
} as Meta<typeof VToggle>;

const Template: StoryFn<typeof VToggle> = (args) => ({
    components: {
        VToggle,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-toggle v-bind="args" @ion-change="(e) => console.log(e.detail.checked)">
            Checked Toggle
        </v-toggle>`,
});

export const Base = Template.bind({});

Base.args = {};
