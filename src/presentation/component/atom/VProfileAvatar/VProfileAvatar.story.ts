import type { Meta, StoryFn } from '@storybook/vue3';
import VProfileAvatar from '@/atom/VProfileAvatar/VProfileAvatar.vue';

export default {
    component: VProfileAvatar,
} as Meta<typeof VProfileAvatar>;

const Template: StoryFn<typeof VProfileAvatar> = (args) => ({
    components: {
        VProfileAvatar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-profile-avatar v-bind="args">Profile Avatar</v-profile-avatar>
    `,
});

export const Base = Template.bind({});
