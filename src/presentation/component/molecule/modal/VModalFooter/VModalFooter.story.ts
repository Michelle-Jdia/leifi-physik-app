import type { Meta, StoryFn } from '@storybook/vue3';
import VModalFooter from '@/molecule/modal/VModalFooter/VModalFooter.vue';
import VButton from '@/atom/button/VButton/VButton.vue';

export default {
    component: VModalFooter,
} as Meta<typeof VModalFooter>;

const Template: StoryFn<typeof VModalFooter> = (args) => ({
    components: {
        VModalFooter,
        VButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-modal-footer v-bind="args" style="position: relative">
          <template #before>
            <button class="v-text-pink">Sammlung löschen</button>
          </template>
          <v-button color="tertiary">+ Artikel</v-button>

          <v-button modifier="v-ml-box-md" color="tertiary">+ Überschrift</v-button>
        </v-modal-footer>
    `,
});

export const Base = Template.bind({});

Base.args = {};
