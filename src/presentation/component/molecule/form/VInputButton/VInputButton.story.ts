import type { Meta, StoryFn } from '@storybook/vue3';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';

export default {
    component: VInputButton,
} as Meta<typeof VInputButton>;

const Template: StoryFn<typeof VInputButton> = (args) => ({
    components: {
        VInputButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-input-button v-bind="args" />
    `,
});

export const Base = Template.bind({});

Base.args = {
    buttonText: 'Erstellen',
    placeholder: 'Name der Sammlung',
    icon: 'icon/collection-subscribe.svg',
};
