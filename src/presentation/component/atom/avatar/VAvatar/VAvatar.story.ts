import type { Meta, StoryFn } from '@storybook/vue3';
import VAvatar from '@/atom/avatar/VAvatar/VAvatar.vue';

export default {
    component: VAvatar,
} as Meta<typeof VAvatar>;

const Template: StoryFn<typeof VAvatar> = (args) => ({
    components: {
        VAvatar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-avatar />
    `,
});

export const Base = Template.bind({});
