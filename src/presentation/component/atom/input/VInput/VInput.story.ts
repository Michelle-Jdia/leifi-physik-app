import type { Meta, StoryFn } from '@storybook/vue3';
import { search } from 'ionicons/icons';
import VInput from '@/atom/input/VInput/VInput.vue';

export default {
    component: VInput,
} as Meta<typeof VInput>;

const Template: StoryFn<typeof VInput> = (args) => ({
    components: {
        VInput,
    },
    setup() {
        return {
            args,
        };
    },
    template: `<v-input v-bind="args"></v-input>`,
});

export const Base = Template.bind({});

export const WithIcon = Template.bind({});

export const Flat = Template.bind({});

export const Purple = Template.bind({});

Base.args = {
    // @ts-ignore
    placeholder: 'placeholder',
};

WithIcon.args = {
    icon: search,
    // @ts-ignore
    placeholder: 'placeholder',
};

Flat.args = {
    // @ts-ignore
    placeholder: 'placeholder',
    variant: 'flat',
};

Purple.args = {
    // @ts-ignore
    placeholder: 'placeholder',
    variant: 'purple',
};
