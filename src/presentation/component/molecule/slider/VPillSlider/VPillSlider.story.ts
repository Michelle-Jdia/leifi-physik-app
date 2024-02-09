import type { Meta, StoryFn } from '@storybook/vue3';
import VPillSlider from '@/molecule/slider/VPillSlider/VPillSlider.vue';

export default {
    component: VPillSlider,
    tags: ['autodocs'],
} as Meta<typeof VPillSlider>;

const Template: StoryFn<typeof VPillSlider> = (args) => ({
    components: {
        VPillSlider,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-pill-slider v-bind="args">
        </v-pill-slider>
    `,
});

function createElement(text: string) {
    const el = document.createElement('h2');

    el.textContent = text;

    return el;
}

export const Base = Template.bind({});

Base.args = {
    sliderItems: [
        createElement('Grundwissen'),
        createElement('Versuche'),
        createElement('Ausblick'),
        createElement('Geschichte'),
    ],
};
