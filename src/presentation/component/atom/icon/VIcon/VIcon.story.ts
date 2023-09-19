import type { Meta, StoryFn } from '@storybook/vue3';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

export default {
    component: VIcon,
} as Meta<typeof VIcon>;

const Template: StoryFn<typeof VIcon> = (args) => ({
    components: {
        VIcon,
    },
    setup() {
        return {
            args,
        };
    },
    template: `<v-icon v-bind="args"></v-icon>`,
});

export const Base = Template.bind({});

export const Small = Template.bind({});

export const Large = Template.bind({});

const iconSrc = '/icon/bond.svg';

Base.args = {
    // @ts-ignore
    src: iconSrc,
};

Small.args = {
    // @ts-ignore
    src: iconSrc,
    size: 'sm',
};

Large.args = {
    // @ts-ignore
    src: iconSrc,
    size: 'md',
};
