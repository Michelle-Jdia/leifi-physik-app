import type { Meta, StoryFn } from '@storybook/vue3';
import VSearchBar from '@/atom/search/VSearchBar/VSearchBar.vue';

export default {
    component: VSearchBar,
} as Meta<typeof VSearchBar>;

const Template: StoryFn<typeof VSearchBar> = (args) => ({
    components: {
        VSearchBar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-search-bar v-bind="args"></v-search-bar>
    `,
});

export const Base = Template.bind({});

export const Purple = Template.bind({});

Base.args = {
    // @ts-ignore
    placeholder: 'placeholder',
};

Purple.args = {
    // @ts-ignore
    placeholder: 'placeholder',
    variant: 'purple',
};
