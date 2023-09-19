<script setup lang="ts">
import type { FavoriteTypeKey } from '@/data/storage/favoriteStorage';
import { bookmark, bookmarkOutline } from 'ionicons/icons';
import { createReactiveData } from '@/connection/helper/fetcher';
import { setFavorite, getFavorite } from '@/store/favoriteStore';
import VHeader from '@/layout/header/VHeader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    id: string;
    type: FavoriteTypeKey;
    isCollection?: boolean;
}

const props = defineProps<Props>();

const { data: favorite, getData: getFavoriteData } = createReactiveData<never, string | void>(
    () => {
        return getFavorite({
            params: {
                id: props.id,
                type: props.type,
            },
        });
    },
)();

async function toggleFavorite(): Promise<void> {
    await setFavorite({
        params: {
            id: props.id,
            type: 'issue',
        },
    });

    getFavoriteData();
}

getFavoriteData();
</script>

<template>
    <v-header>
        <h1 v-if="$slots.default" class="text-h3 text-white v-py-box-md">
            <slot />
        </h1>

        <template #actions>
            <v-button size="none">
                <v-icon src="icon/collection.svg" />
            </v-button>

            <!--          @TODO: discuss slots-->
            <v-button size="none" @click="toggleFavorite">
                <v-icon :icon="favorite ? bookmark : bookmarkOutline" />
            </v-button>
        </template>
    </v-header>
</template>
