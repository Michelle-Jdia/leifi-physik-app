<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { trash, bookmarkOutline, bookmark, document, chevronForwardOutline } from 'ionicons/icons';
import { cn } from '@/presentation/helper/style';
import { IonItemOption } from '@ionic/vue';
import VSlide from '@/atom/slide/VSlide/VSlide.vue';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    id: string;
    branch: {
        title: string;
        color: string;
    };
    title: string;
    subTitle: string;
    isLearnMode?: boolean;
    isLearned?: boolean;
    isFavorite?: boolean;
    isTopic?: boolean;
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: 'onDelete', id: string): void;
    (e: 'onCreate', id: string): void;
    (e: 'onFavorite', id: string, closeSlide: () => void): void;
}>();

const favoriteIcon: ComputedRef<string> = computed(() => {
    return props.isFavorite ? bookmark : bookmarkOutline;
});

function onFavorite(id: string, closeSlide: () => void) {
    emit('onFavorite', id, closeSlide);
}
</script>

<template>
    <v-slide
        :modifier="cn('article-info-slide', modifier, isTopic && 'v-bg-gray-20')"
        :slide-background="isTopic ? 'v-bg-gray-20' : ''"
    >
        <div class="mb-box-sm">
            <v-badge :color="branch.color">
                {{ branch.title }}
            </v-badge>

            <v-badge v-if="isFavorite" modifier="v-ml-box v-bg-gray-50">Favorit</v-badge>

            <v-badge v-if="isLearned" modifier="v-ml-box v-bg-green-50">Gelernt</v-badge>
        </div>

        <div class="v-mt-box">
            <h3 class="v-text-h4 md:v-text-h3">{{ title }}</h3>

            <span class="v-h5 v-mt-2 v-inline-block v-text-ty-helper">{{ subTitle }}</span>
        </div>

        <div v-if="$slots.default" class="v-mt-box">
            <slot />
        </div>

        <template #end>
            <v-icon color="v-color-ty-headline" :icon="chevronForwardOutline" />
        </template>

        <template #actions="{ closeSlide }">
            <ion-item-option
                v-if="isLearnMode"
                data-testid="article-info-delete"
                class="v-min-w-[6rem] v-bg-danger v-text-center"
                @click="emit('onDelete', id)"
            >
                <v-icon slot="top" size="md" :icon="trash" />

                <span class="v-mt-box-md">Löschen</span>
            </ion-item-option>

            <ion-item-option
                v-if="isLearnMode"
                data-testid="article-info-create"
                class="v-min-w-[6rem] v-bg-warning v-text-center v-text-white"
                @click="emit('onCreate', id)"
            >
                <v-icon slot="top" size="md" :icon="document" />

                <span class="v-mt-box-md">
                    Notiz
                    <div>erstellen</div>
                </span>
            </ion-item-option>

            <ion-item-option
                data-testid="article-info-favorite"
                class="v-min-w-[3.75rem] v-bg-pink v-text-center v-text-copy-xs v-font-bold v-text-white"
                @click="() => onFavorite(id, closeSlide)"
            >
                <v-icon slot="top" size="md" :icon="favoriteIcon" />

                <span class="v-mt-box-md">
                    Favorit
                    <div v-if="isFavorite">entfernen</div>

                    <div v-else>setzen</div>
                </span>
            </ion-item-option>
        </template>
    </v-slide>
</template>
