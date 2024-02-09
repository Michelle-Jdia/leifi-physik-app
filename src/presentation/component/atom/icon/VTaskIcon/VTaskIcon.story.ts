import type { Meta, StoryFn } from '@storybook/vue3';
import VTaskIcon from '@/atom/icon/VTaskIcon/VTaskIcon.vue';

export default {
    component: VTaskIcon,
} as Meta<typeof VTaskIcon>;

const Template: StoryFn<typeof VTaskIcon> = (args) => ({
    components: {
        VTaskIcon,
    },
    setup() {
        return {
            args,
        };
    },
    template: `<v-task-icon v-bind="args"></v-task-icon>`,
});

export const Base = Template.bind({});

const iconSrc = '/icon/lamp.svg';

Base.args = {
    // @ts-ignore
    src: iconSrc,
    color: 'green',
};
