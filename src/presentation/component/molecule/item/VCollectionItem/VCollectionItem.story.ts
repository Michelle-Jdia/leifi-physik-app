import type { Meta, StoryFn } from '@storybook/vue3';
import { collection } from '@/presentation/static/collection';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';

export default {
    component: VCollectionItem,
} as Meta<typeof VCollectionItem>;

const Template: StoryFn<typeof VCollectionItem> = (args) => ({
    components: {
        VCollectionItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-collection-item v-bind="args"></v-collection-item>
    `,
});

export const Base = Template.bind({});

export const WithIcon = Template.bind({});

export const WithNotification = Template.bind({});

export const WithLearnStatus = Template.bind({});

Base.args = {
    privateTitle: collection.private_title,
    subtitle: collection.title,
    isSubscribed: false,
};

WithIcon.args = {
    privateTitle: collection.private_title,
    subtitle: collection.title,
    isSubscribed: true,
};

WithNotification.args = {
    privateTitle: collection.private_title,
    subtitle: collection.title,
    isSubscribed: true,
    withNotification: true,
};

WithLearnStatus.args = {
    privateTitle: collection.private_title,
    subtitle: collection.title,
    isLearnMode: true,
    learnStatus: '3/3 Inhalten gelernt',
};
