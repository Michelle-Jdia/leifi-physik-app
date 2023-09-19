import type { Meta, StoryFn } from '@storybook/vue3';
import { branch } from '@/presentation/static/branch';
import { topic } from '@/presentation/static/topic';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VArticleBox from '@/molecule/box/VArticleBox/VArticleBox.vue';

export default {
    component: VArticleBox,
} as Meta<typeof VArticleBox>;

const Template: StoryFn<typeof VArticleBox> = (args) => ({
    components: {
        VArticleBox,
        VBadge,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-article-box v-bind="args">
            <v-badge modifier="bg-yellow-50">
                ${branch.title}
            </v-badge>
      </v-article-box>
    `,
});

export const Base = Template.bind({});

Base.args = {
    title: topic.title,
    subtitle: topic.subtitle,
};
