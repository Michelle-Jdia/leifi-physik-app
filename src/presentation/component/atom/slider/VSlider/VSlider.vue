<script setup lang="ts">
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import type { SwiperOptions } from 'swiper/types/swiper-options';
import type { SwiperModule } from 'swiper/types';
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { ref, computed } from 'vue';
import { breakpoints } from '@/presentation/helper/breakpoint';
import { Swiper } from 'swiper/vue';
import { IonicSlides } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

type SlidesPerView = '2.3' | '5.3' | SwiperOptions['slidesPerView'];
type SpaceBetweenSlides = '8';

interface Props {
    slidesPerView?: SlidesPerView;
    slidesPerViewTablet?: SlidesPerView;
    spaceBetweenSlides?: SpaceBetweenSlides;
    modules?: SwiperModule[];
    modifier?: ClassValue;
}

const props = withDefaults(defineProps<Props>(), {
    modules: () => [],
    slidesPerView: '2.3',
    slidesPerViewTablet: '5.3',
    spaceBetweenSlides: '8',
});

const isMobile = ref(window.innerWidth < breakpoints.tablet);

const slidesPerViewBasedOnWindowSize: ComputedRef<SlidesPerView> = computed(() => {
    return isMobile.value ? props.slidesPerView : props.slidesPerViewTablet;
});

window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < breakpoints.tablet;
});
</script>

<template>
    <swiper
        :space-between="spaceBetweenSlides"
        :slides-per-view="(slidesPerViewBasedOnWindowSize as SwiperOptions['slidesPerView']) "
        :class="cn('slider', modifier)"
        :modules="[...modules, IonicSlides]"
    >
        <slot />
    </swiper>
</template>
