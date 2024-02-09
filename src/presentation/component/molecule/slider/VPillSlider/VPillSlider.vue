<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { Swiper } from 'swiper/types';
import type { ComputedRef, Ref } from 'vue';
import { SwiperSlide } from 'swiper/vue';
import { computed, ref } from 'vue';
import { cn } from '@/presentation/helper/style';
import VPill from '@/atom/pill/VPill/VPill.vue';
import VSlider from '@/atom/slider/VSlider/VSlider.vue';

interface Props {
    sliderItems: (HTMLHeadingElement | string)[];
    modifier?: ClassValue;
}

const props = defineProps<Props>();
const activePillText = ref('');
const slider: Ref<Swiper | void> = ref();

const emit = defineEmits<{
    (e: 'onClick', text: string): void;
}>();

function scrollToElement(element: HTMLHeadingElement): void {
    element.scrollIntoView({
        behavior: 'smooth',
    });

    activePillText.value = element.innerText || '';

    if (!slider.value) {
        return;
    }

    slider.value.slideTo(selectedIndex.value);
}

function getItemText(item: HTMLHeadingElement | string): string {
    if (typeof item === 'string') {
        return item;
    }

    return item.textContent || '';
}

function isActive(text: string | null): boolean {
    return activePillText.value === text;
}

const selectedIndex: ComputedRef<number> = computed(() => {
    return anchors.value.findIndex((anchor) => isActive(getItemText(anchor)));
});

// named in case we want to do more processing before using them
const anchors: ComputedRef<(HTMLHeadingElement | string)[]> = computed(() => {
    // found case where 1 of the refs came back undefined/empty, thus the array that got here was [ref, undefined, ref], thus throwing error and no pills visible
    return props.sliderItems.filter((anchor) => anchor);
});

function scrollToFirstElement(): void {
    if (anchors.value?.length && anchors.value[0] && typeof anchors.value[0] !== 'string') {
        scrollToElement(anchors.value[0]);
    }
}

function sliderReady({ swiper }: { swiper: Swiper }): void {
    slider.value = swiper;

    scrollToFirstElement();
}

function handlePillClick(element: HTMLHeadingElement | string): void {
    if (typeof element !== 'string') {
        scrollToElement(element);
    }

    activePillText.value = getItemText(element);

    emit('onClick', getItemText(element));
}
</script>

<template>
    <div v-if="anchors && anchors.length > 1" :class="cn('pill-slider', modifier)">
        <v-slider slides-per-view="auto" @on-ready="sliderReady">
            <swiper-slide v-for="item in anchors" :key="getItemText(item)" class="!v-w-auto">
                <v-pill
                    :variant="isActive(getItemText(item)) ? 'white' : 'default'"
                    @click="handlePillClick(item)"
                >
                    {{ getItemText(item) }}
                </v-pill>
            </swiper-slide>
        </v-slider>
    </div>
</template>
