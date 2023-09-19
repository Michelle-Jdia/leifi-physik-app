import type { Meta, StoryFn } from '@storybook/vue3';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

export default {
    component: VButton,
} as Meta<typeof VButton>;

const Template: StoryFn<typeof VButton> = (args) => ({
    components: {
        VButton,
        VIcon,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <v-button v-bind="args">
        <v-icon src="/icon/bond.svg" withSpaceRight />
        VButton
        <v-icon src="/icon/bond.svg" withSpaceLeft modifier="v-text-danger" />
    </v-button>`,
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Tertiary = Template.bind({});

export const Small = Template.bind({});

Secondary.args = {
    // @ts-ignore
    color: 'secondary',
};

Tertiary.args = {
    // @ts-ignore
    color: 'tertiary',
};

Small.args = {
    size: 'small',
};
