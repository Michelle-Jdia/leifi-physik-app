<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { RouteLocationRaw } from 'vue-router';
import type { Props as VArticleBoxProps } from '@/molecule/box/VArticleBox/VArticleBox.vue';
import { cn } from '@/presentation/helper/style';
import { SwiperSlide } from 'swiper/vue';
import VSlider from '@/atom/slider/VSlider/VSlider.vue';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VArticleBox from '@/molecule/box/VArticleBox/VArticleBox.vue';

export interface SliderItem extends VArticleBoxProps {
    badge: {
        title: string;
        color: string;
    };
    link: Partial<RouteLocationRaw>;
}

interface Props {
    lastBox: {
        title: string;
        link: Partial<RouteLocationRaw>;
    };
    sliderItems: SliderItem[];
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('article-box-slider v-p-box-xl', modifier)">
        <h2 v-if="$slots.default" class="v-h2 v-mb-box">
            <slot />
        </h2>

        <v-slider modifier="!v-overflow-visible">
            <swiper-slide
                v-for="(item, index) in sliderItems"
                :key="`${item.title}-${index}`"
                class="!v-h-auto"
            >
                <router-link :to="item.link" class="v-h-full v-w-full">
                    <v-article-box
                        :title="item.title"
                        :subtitle="item.subtitle"
                        :is-learned="item.isLearned"
                        :with-notification="item.withNotification"
                        modifier="v-h-full v-w-full"
                    >
                        <v-badge :modifier="item.badge.color">
                            {{ item.badge.title }}
                        </v-badge>
                    </v-article-box>
                </router-link>
            </swiper-slide>

            <swiper-slide>
                <router-link :to="lastBox.link" class="v-h-full v-w-full">
                    <v-article-box
                        modifier="v-border-dashed v-bg-transparent v-shadow-none"
                        is-learned
                        :title="lastBox.title"
                    >
                        <v-icon src="icon/arrow-right.svg" size="sm" />
                    </v-article-box>
                </router-link>
            </swiper-slide>
        </v-slider>
    </div>
</template>
