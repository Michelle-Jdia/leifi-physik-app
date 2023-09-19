import type { Meta, StoryFn } from '@storybook/vue3';
import VNotification from '@/molecule/notification/VNotification.vue';
import { topic } from '@/presentation/static/topic';

export default {
    component: VNotification,
} as Meta<typeof VNotification>;

const Template: StoryFn<typeof VNotification> = (args) => ({
    components: {
        VNotification,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-notification v-bind="args">
            ${topic.title}
        </v-notification>
    `,
});

export const Base = Template.bind({});

Base.args = {
    date: '20.20.2025',
    type: topic.subtitle,
};
