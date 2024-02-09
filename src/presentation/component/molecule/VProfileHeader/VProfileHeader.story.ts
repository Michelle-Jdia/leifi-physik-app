import type { Meta, StoryFn } from '@storybook/vue3';
import VProfileHeader from '@/molecule/VProfileHeader/VProfileHeader.vue';

export default {
    component: VProfileHeader,
} as Meta<typeof VProfileHeader>;

const Template: StoryFn<typeof VProfileHeader> = (args) => ({
    components: {
        VProfileHeader,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-profileHeader>
            Mia Mustermann
        </v-profileHeader>
    `,
});

export const Base = Template.bind({});
