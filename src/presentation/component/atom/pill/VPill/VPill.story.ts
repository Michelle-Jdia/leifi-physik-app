import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import VPill from '@/atom/pill/VPill/VPill.vue';

export default {
    component: VPill,
} as Meta<typeof VPill>;

const Template: StoryFn<typeof VPill> = (args) => ({
    components: {
        VPill,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-pill v-bind="args">
          ${branch.title}
        </v-pill>
    `,
});

export const Base = Template.bind({});

export const Small = Template.bind({});

export const White = Template.bind({});

export const Purple = Template.bind({});

Base.args = {};

Small.args = {
    size: 'sm',
};

White.args = {
    variant: 'white',
};

Purple.args = {
    variant: 'purple',
};
