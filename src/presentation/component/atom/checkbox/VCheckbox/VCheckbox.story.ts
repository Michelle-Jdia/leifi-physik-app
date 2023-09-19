import type { Meta, StoryFn } from '@storybook/vue3';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';

export default {
    component: VCheckbox,
} as Meta<typeof VCheckbox>;

const Template: StoryFn<typeof VCheckbox> = (args) => ({
    components: {
        VCheckbox,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
      <v-checkbox v-bind="args">
        VCheckbox
      </v-checkbox>
    `,
});

export const Base = Template.bind({});

export const Checked = Template.bind({});

export const Disabled = Template.bind({});

Checked.args = {
    //@ts-ignore
    checked: true,
};

Disabled.args = {
    //@ts-ignore
    disabled: true,
};
