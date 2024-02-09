<script setup lang="ts">
import type { Img } from '@/presentation/type/img';
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import type { RouteLocationNamedRaw } from 'vue-router';
import { IonImg } from '@ionic/vue';
import { SwiperSlide } from 'swiper/vue';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';
import VTopicImageBox from '@/atom/box/VTopicImageBox/VTopicImageBox.vue';
import VSlider from '@/atom/slider/VSlider/VSlider.vue';

export interface SliderItem {
    img: Img;
    title: string;
    link: Partial<RouteLocationNamedRaw>;
}

interface Props {
    branchImg: Img;
    color: string;
    link?: Partial<RouteLocationNamedRaw>;
    sliderItems: SliderItem[];
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const tag: ComputedRef<string> = computed(() => {
    if (props.link) {
        return 'router-link';
    }

    return 'div';
});

const topicColor: ComputedRef<string> = computed(() => {
    return `${props.color}-light`;
});
</script>

<template>
    <div :class="cn('topic-box-slider v-rounded v-p-box-lg', topicColor, modifier)">
        <component :is="tag" :to="link" class="v-inline-flex v-items-center">
            <ion-img
                class="v-w-[1.5rem] v-overflow-hidden v-rounded"
                :src="branchImg.src"
                :alt="branchImg.alt"
            />

            <h4 v-if="$slots.default" class="v-h4 v-ml-box v-underline">
                <slot />
            </h4>
        </component>

        <slot name="loading" />

        <v-slider v-if="sliderItems.length" modifier="v-mt-box !v-overflow-visible v-rounded">
            <swiper-slide
                v-for="(item, index) in sliderItems"
                :key="`${item.img.src}-${index}`"
                class="v-overflow-hidden v-rounded v-bg-white"
            >
                <router-link :to="item.link" class="v-h-full v-w-full v-text-ty-headline">
                    <v-topic-image-box :img="item.img" modifier="v-h-[9rem] md:v-h-[11rem]">
                        {{ item.title }}
                    </v-topic-image-box>
                </router-link>
            </swiper-slide>
        </v-slider>
    </div>
</template>
