import type { Meta, StoryFn } from '@storybook/vue3';
import VProfileAvatar from '@/molecule/VProfileAvatar/VProfileAvatar.vue';

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
        <v-profile-avatar modifier="v-w-[21rem] v-h-[21rem]" />
    `,
});

export const Base = Template.bind({});
