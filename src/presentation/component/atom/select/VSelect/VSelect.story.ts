import type { Meta, StoryFn } from '@storybook/vue3';
import { IonSelectOption } from '@ionic/vue';
import VSelect from '@/atom/select/VSelect/VSelect.vue';

export default {
    component: VSelect,
    IonSelectOption,
} as Meta<typeof VSelect>;

const Template: StoryFn<typeof VSelect> = (args) => ({
    components: {
        VSelect,
        IonSelectOption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-select v-bind="args">
            <template #option>
                <IonSelectOption>option</IonSelectOption>
            </template>
        </v-select>
    `,
});

export const Base = Template.bind({});

Base.args = {
    // @ts-ignore
    placeholder: 'placeholder',
};
