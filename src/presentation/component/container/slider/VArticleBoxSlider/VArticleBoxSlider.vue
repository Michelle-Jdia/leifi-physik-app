<script setup lang="ts">
import type { FavoriteTypeKey } from '@/data/type/app/favorite';
import type { ClassValue } from 'clsx';
import type { RouteLocationNamedRaw } from 'vue-router';
import { SwiperSlide } from 'swiper/vue';
// import type { Props as VArticleBoxProps } from '@/molecule/box/VArticleBox/VArticleBox.vue';
import { cn } from '@/presentation/helper/style';
import VFavoriteWrapper from '@/container/wrapper/VFavoriteWrapper/VFavoriteWrapper.vue';
import VArticleBox from '@/molecule/box/VArticleBox/VArticleBox.vue';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VSlider from '@/atom/slider/VSlider/VSlider.vue';

export interface SliderItem {
    id: string;
    type: FavoriteTypeKey;
    // isLearned?: VArticleBoxProps['isLearned'];
    // withNotification?: VArticleBoxProps['withNotification'];
}

interface Props {
    lastBox: {
        title: string;
        link: Partial<RouteLocationNamedRaw>;
    };
    sliderItems: SliderItem[];
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('article-box-slider', modifier)">
        <h2 v-if="$slots.default" class="v-h2 v-mb-box md:v-mb-box-xl">
            <slot />
        </h2>

        <v-slider modifier="!v-overflow-visible">
            <swiper-slide v-for="item in sliderItems" :key="`${item.id}`" class="!v-h-auto">
                <v-favorite-wrapper :id="item.id" :type="item.type">
                    <template #default="{ title, subtitle, branch, link, isFavorite }">
                        <router-link :to="link" class="v-h-full v-w-full">
                            <v-article-box
                                :title="title"
                                :subtitle="subtitle"
                                :is-favorite="isFavorite"
                                :is-learned="true"
                                :with-notification="false"
                                modifier="v-h-full v-w-full"
                            >
                                <v-badge :modifier="branch.color">
                                    {{ branch.title }}
                                </v-badge>
                            </v-article-box>
                        </router-link>
                    </template>
                </v-favorite-wrapper>
            </swiper-slide>

            <swiper-slide class="!v-h-auto">
                <router-link :to="lastBox.link" class="v-h-full v-w-full">
                    <v-article-box
                        modifier="v-bg-transparent v-shadow-none v-border-dashed v-h-full v-w-full"
                        :is-learned="true"
                        :title="lastBox.title"
                    >
                        <v-icon src="icon/arrow-right.svg" size="sm" />
                    </v-article-box>
                </router-link>
            </swiper-slide>
        </v-slider>
    </div>
</template>
