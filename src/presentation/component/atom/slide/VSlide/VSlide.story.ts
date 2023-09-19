import type { Meta, StoryFn } from '@storybook/vue3';
import { IonItemOption } from '@ionic/vue';
import VSlide from '@/atom/slide/VSlide/VSlide.vue';

export default {
    component: VSlide,
} as Meta<typeof VSlide>;

const Template: StoryFn<typeof VSlide> = (args) => ({
    components: {
        VSlide,
        IonItemOption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-slide v-bind="args">
            slot text

            <template #actions>
                <ion-item-option>Option 1</ion-item-option>
                <ion-item-option class="v-bg-danger">Option 2</ion-item-option>    
            </template>
        </v-slide>
    `,
});

export const Base = Template.bind({});
