<script setup lang="ts">
import type { SolvedEnumId } from '@/data/type/api/solvedApi';
import type { FavoriteTypeKey } from '@/data/type/app/favorite';
import type { ContentType } from '@/data/type/helper/contentType';
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { IonItemOption } from '@ionic/vue';
import { bookmark, bookmarkOutline, chevronForwardOutline, document, trash } from 'ionicons/icons';
import { computed } from 'vue';
import { isFavoriteType } from '@/data/type/app/favorite';
import { cn } from '@/presentation/helper/style';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VLearnStatusPopover from '@/atom/popover/VLearnStatusPopover/VLearnStatusPopover.vue';
import VSlide from '@/atom/slide/VSlide/VSlide.vue';
import VTransition from '@/atom/transition/VTransition/VTransition.vue';

export interface Props {
    id: string;
    learnStatus?: SolvedEnumId | string;
    type:
        | ContentType.ISSUE
        | ContentType.TASK
        | ContentType.DOWNLOAD
        | ContentType.LINK
        | ContentType.TOPIC;
    branch: {
        title: string;
        color: string;
    };
    title: string;
    subtitle: string;
    hasNote?: boolean;
    isLearnMode?: boolean;
    isMyCollection?: boolean;
    isFavorite?: boolean;
    isTopic?: boolean;
    modifier?: ClassValue;
}

const props = defineProps<Props>();

interface onFavoriteOutput {
    id: string;
    type: FavoriteTypeKey;
}

const emit = defineEmits<{
    (e: 'onDelete', id: string): void;
    (e: 'onEditNote', id: string): void;
    (e: 'onFavorite', { id, type }: onFavoriteOutput, closeSlide: () => void): void;
    (
        e: 'onLearnStatusClick',
        { id, learnStatusId }: { id: string; learnStatusId: SolvedEnumId | string },
    ): void;
}>();

const favoriteIcon: ComputedRef<string> = computed(() => {
    return props.isFavorite ? bookmark : bookmarkOutline;
});

function emitSelectedLearnStatus(learnStatusId: SolvedEnumId | string): void {
    emit('onLearnStatusClick', {
        id: props.id,
        learnStatusId,
    });
}

function favorite(closeSlide: () => void): void {
    if (isFavoriteType(props.type)) {
        emit(
            'onFavorite',
            {
                id: props.id,
                type: props.type,
            },
            closeSlide,
        );
    }
}
</script>

<template>
    <v-slide
        :modifier="cn('article-info-slide', modifier, isTopic && 'v-bg-gray-20')"
        :slide-background="isTopic ? 'v-bg-gray-20' : ''"
    >
        <v-badge :color="branch.color" :modifier="{ '!v-bg-gray-50': isLearnMode }">
            {{ branch.title }}
        </v-badge>

        <v-badge v-if="isFavorite" modifier="v-ml-box v-bg-gray-50">Favorit</v-badge>

        <v-transition type="slide-right">
            <v-learn-status-popover
                v-if="isLearnMode"
                modifier="v-ml-box"
                :learn-status="learnStatus"
                @on-select="emitSelectedLearnStatus"
                @click.prevent
            />
        </v-transition>

        <div class="v-mt-box-sm">
            <h3 class="v-text-h4 md:v-text-h3">{{ title }}</h3>

            <span class="v-h5 v-mt-2 v-inline-block v-font-fflight v-text-ty-helper">
                {{ subtitle }}
            </span>
        </div>

        <div v-if="$slots.default" class="v-mt-box">
            <slot />
        </div>

        <template v-if="$slots.after" #after>
            <slot name="after" />
        </template>

        <template #end>
            <v-icon color="v-color-ty-headline" :icon="chevronForwardOutline" />
        </template>

        <template #actions="{ closeSlide }">
            <ion-item-option
                v-if="isMyCollection"
                data-testid="article-info-delete"
                class="v-w-[6rem] v-bg-danger v-text-center"
                @click="emit('onDelete', id)"
            >
                <v-icon slot="top" :icon="trash" />

                <span class="v-mt-box-md">Löschen</span>
            </ion-item-option>

            <ion-item-option
                v-if="isMyCollection"
                data-testid="article-info-create"
                class="v-w-[6rem] v-bg-warning v-text-center"
                @click="emit('onEditNote', id)"
            >
                <v-icon slot="top" :icon="document" />

                <span class="v-mt-box-md">
                    Notiz
                    <div v-if="hasNote">bearbeiten</div>

                    <div v-else>erstellen</div>
                </span>
            </ion-item-option>

            <!-- @TODO there should be a possibility to control from the VFavoriteWrapper.vue if the favorite functionality can be used here -->

            <ion-item-option
                v-if="isFavoriteType(type)"
                data-testid="article-info-favorite"
                class="v-w-[6rem] v-bg-pink v-text-center"
                @click="() => favorite(closeSlide)"
            >
                <v-icon slot="top" :icon="favoriteIcon" />

                <span class="v-mt-box-md">
                    Favorit
                    <div v-if="isFavorite">entfernen</div>

                    <div v-else>setzen</div>
                </span>
            </ion-item-option>
        </template>
    </v-slide>
</template>
