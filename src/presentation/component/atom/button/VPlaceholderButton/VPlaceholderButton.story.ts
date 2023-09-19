import type { Meta, StoryFn } from '@storybook/vue3';
import VPlaceholderButton from '@/atom/button/VPlaceholderButton/VPlaceholderButton.vue';

export default {
    component: VPlaceholderButton,
} as Meta<typeof VPlaceholderButton>;

const Template: StoryFn<typeof VPlaceholderButton> = (args) => ({
    components: {
        VPlaceholderButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-placeholder-button v-bind="args" />
    `,
});

export const Base = Template.bind({});

export const Add = Template.bind({});

Base.args = {};

Add.args = {
    type: 'add',
};
