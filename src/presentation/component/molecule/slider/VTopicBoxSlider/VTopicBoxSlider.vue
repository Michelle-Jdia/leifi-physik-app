<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { RouteLocationRaw } from 'vue-router';
import type { Img } from '@/presentation/type/img';
import { cn } from '@/presentation/helper/style';
import { SwiperSlide } from 'swiper/vue';
import { IonImg } from '@ionic/vue';
import VSlider from '@/atom/slider/VSlider/VSlider.vue';
import VTopicImageBox from '@/atom/box/VTopicImageBox/VTopicImageBox.vue';

export interface SliderItem {
    img: Img;
    title: string;
    link: Partial<RouteLocationRaw>;
}

interface Props {
    branchImg: Img;
    link?: Partial<RouteLocationRaw>;
    sliderItems: SliderItem[];
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('topic-box-slider v-rounded v-p-box-lg', modifier)">
        <template v-if="link">
            <router-link :to="link" class="v-inline-flex v-items-center">
                <ion-img
                    class="v-w-[1.5rem] v-overflow-hidden v-rounded"
                    :src="branchImg.src"
                    :alt="branchImg.alt"
                />

                <span
                    v-if="$slots.default"
                    class="v-ml-box v-text-h3 v-text-ty-headline v-underline"
                >
                    <slot />
                </span>
            </router-link>
        </template>

        <template v-else>
            <div class="v-inline-flex v-items-center">
                <ion-img
                    class="v-w-[1.5rem] v-overflow-hidden v-rounded"
                    :src="branchImg.src"
                    :alt="branchImg.alt"
                />

                <span
                    v-if="$slots.default"
                    class="v-ml-box v-text-h3 v-text-ty-headline v-underline"
                >
                    <slot />
                </span>
            </div>
        </template>

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
