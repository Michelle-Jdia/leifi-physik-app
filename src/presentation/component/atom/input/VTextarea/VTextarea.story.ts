import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import VTextarea from '@/atom/input/VTextarea/VTextarea.vue';

export default {
    component: VTextarea,
} as Meta<typeof VTextarea>;

const Template: StoryFn<typeof VTextarea> = (args) => ({
    components: {
        VTextarea,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-textarea v-bind="args">
          ${branch.title}
        </v-textarea>
    `,
});

export const Base = Template.bind({});

Base.args = {};
