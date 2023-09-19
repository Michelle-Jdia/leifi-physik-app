import type { Meta, StoryFn } from '@storybook/vue3';
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
          <template #accordion-label>
            <h3 class="!v-text-h3 v-text-primary v-underline">label</h3>
          </template>
          
            Content
        </v-accordion>
    `,
});

export const Base = Template.bind({});

Base.args = {};
