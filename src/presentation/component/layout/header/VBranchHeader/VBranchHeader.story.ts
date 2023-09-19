import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';

export default {
    component: VBranchHeader,
} as Meta<typeof VBranchHeader>;

const Template: StoryFn<typeof VBranchHeader> = (args) => ({
    components: {
        VBranchHeader,
    },
    setup() {
        return {
            args,
        };
    },
    template: `<v-branch-header>
      ${branch.title}
    </v-branch-header>`,
});

export const Base = Template.bind({});
