<script setup lang="ts">
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import type { ClassValue } from 'clsx';
import type { SwiperModule, Swiper as SwiperType } from 'swiper/types';
import type { SwiperOptions } from 'swiper/types/swiper-options';
import type { ComputedRef } from 'vue';
import { IonicSlides } from '@ionic/vue';
import { Swiper } from 'swiper/vue';
import { computed } from 'vue';
import { breakpoints as mediaBreakpoints } from '@/presentation/helper/breakpoint';
import { cn } from '@/presentation/helper/style';

type SlidesPerView = '1.7' | '2.4' | '3.3' | SwiperOptions['slidesPerView'];
type SpaceBetweenSlides = '8';

interface Props {
    slidesPerView?: SlidesPerView;
    spaceBetweenSlides?: SpaceBetweenSlides;
    breakpoints?: SwiperOptions['breakpoints'];
    modules?: SwiperModule[];
    modifier?: ClassValue;
}

const props = withDefaults(defineProps<Props>(), {
    modules: () => [],
    slidesPerView: '1.7',
    spaceBetweenSlides: '8',
});

const emit = defineEmits<{
    (e: 'onReady', { swiper }: { swiper: SwiperType }): void;
}>();

const slidesPerViewTablet: SlidesPerView = '2.4';
const slidesPerViewDesktop: SlidesPerView = '3.3';

// @ts-ignore
const defaultBreakpoints: ComputedRef<SwiperOptions['breakpoints']> = computed(() => {
    if (props.slidesPerView !== 'auto') {
        return {
            [mediaBreakpoints.mobile]: {
                slidesPerView: slidesPerViewTablet,
            },
            [mediaBreakpoints.tablet]: {
                slidesPerView: slidesPerViewDesktop,
            },
        };
    }

    return {};
});

function emitSwiper(swiper: SwiperType): void {
    emit('onReady', {
        swiper,
    });
}
</script>

<template>
    <swiper
        :space-between="spaceBetweenSlides"
        :slides-per-view="(slidesPerView as SwiperOptions['slidesPerView']) "
        :class="cn('slider', modifier)"
        :modules="[...modules, IonicSlides]"
        :breakpoints="breakpoints || defaultBreakpoints"
        @swiper="emitSwiper"
    >
        <slot />
    </swiper>
</template>
