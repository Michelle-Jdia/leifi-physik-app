import type { Meta, StoryFn } from '@storybook/vue3';
import { topic } from '@/presentation/static/topic';
import VTopicImageBox from '@/atom/box/VTopicImageBox/VTopicImageBox.vue';

export default {
    component: VTopicImageBox,
} as Meta<typeof VTopicImageBox>;

const Template: StoryFn<typeof VTopicImageBox> = (args) => ({
    components: {
        VTopicImageBox,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-topic-image-box v-bind="args">
            ${topic.title}
        </v-topic-image-box>
    `,
});

export const Base = Template.bind({});

Base.args = {
    img: topic.img,
};
