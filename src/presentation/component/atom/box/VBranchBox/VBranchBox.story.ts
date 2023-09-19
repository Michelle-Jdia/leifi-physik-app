import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import VBranchBox from '@/atom/box/VBranchBox/VBranchBox.vue';

export default {
    component: VBranchBox,
} as Meta<typeof VBranchBox>;

const Template: StoryFn<typeof VBranchBox> = (args) => ({
    components: {
        VBranchBox,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-branch-box v-bind="args">
            ${branch.title}
        </v-branch-box>
    `,
});

export const Base = Template.bind({});

Base.args = {
    img: branch.img,
};
