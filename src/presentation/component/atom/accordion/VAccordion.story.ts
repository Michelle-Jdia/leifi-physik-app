import type { Meta, StoryFn } from '@storybook/vue3';
import { chevronDown } from 'ionicons/icons';
import VAccordion from '@/atom/accordion/VAccordion.vue';

export default {
    component: VAccordion,
} as Meta<typeof VAccordion>;

const Template: StoryFn<typeof VAccordion> = (args) => ({
    components: {
        VAccordion,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-accordion v-bind="args" label="First Accordion">
          <template #label>
            label
          </template>
          
            Content
        </v-accordion>
    `,
});

export const Base = Template.bind({});

export const WithIcon = Template.bind({});

Base.args = {};

WithIcon.args = {
    toggleIcon: chevronDown,
};
