import type { Meta, StoryFn } from '@storybook/vue3';
import VProfileInfoItem from '@/molecule/item/VProfileInfoItem/VProfileInfoItem.vue';

export default {
    component: VProfileInfoItem,
} as Meta<typeof VProfileInfoItem>;

const Template: StoryFn<typeof VProfileInfoItem> = (args) => ({
    components: {
        VProfileInfoItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-profile-info-item v-bind="args">
            <template #title>Name</template>
            Mia Mustermann
        </v-profile-info-item>
    `,
});

export const Base = Template.bind({});

Base.args = {};
