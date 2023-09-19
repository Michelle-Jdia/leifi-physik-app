import type { Meta, StoryFn } from '@storybook/vue3';
import { SwiperSlide } from 'swiper/vue';
import VSlider from '@/atom/slider/VSlider/VSlider.vue';

export default {
    component: VSlider,
} as Meta<typeof VSlider>;

const Template: StoryFn<typeof VSlider> = (args) => ({
    components: {
        VSlider,
        SwiperSlide,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <v-slider v-bind="args">
            <swiper-slide class="p-box bg-pink-50">Slide 1</swiper-slide>
            <swiper-slide class="p-box bg-yellow-50">Slide 2</swiper-slide>
            <swiper-slide class="p-box bg-green-50">Slide 3</swiper-slide>
        </v-slider>
    `,
});

export const Base = Template.bind({});
