import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';

export default {
    component: VBadge,
} as Meta<typeof VBadge>;

const Template: StoryFn<typeof VBadge> = (args) => ({
    components: {
        VBadge,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-badge v-bind="args">
          ${branch.title}
        </v-badge>
    `,
});

export const Base = Template.bind({});

Base.args = {
    modifier: 'v-bg-yellow-80',
};
