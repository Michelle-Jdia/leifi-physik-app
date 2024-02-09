<script setup lang="ts">
import type { FavoriteTypeKey } from '@/data/type/app/favorite';
import type { ComputedRef } from 'vue';
import { bookmark, bookmarkOutline } from 'ionicons/icons';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { isFavoriteType } from '@/data/type/app/favorite';
import { useArticleState } from '@/state/articleState';
import { getCollectionItemCount } from '@/store/collectionStore';
import { toggleFavorite, useFavorite } from '@/store/favoriteStore';
import { cn } from '@/presentation/helper/style';
import VHeader from '@/layout/header/VHeader.vue';
import VPillSlider from '@/molecule/slider/VPillSlider/VPillSlider.vue';
import VCollectionCountIcon from '@/atom/icon/VCollectionCountIcon/VCollectionCountIcon.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    id: string;
    type: FavoriteTypeKey;
    anchors?: HTMLHeadingElement[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (event: 'onOpenAddToCollection'): void;
}>();

const articleState = useArticleState();
const route = useRoute();

const { data: favorite, getData: getFavorite } = useFavorite({
    id: props.id,
});

async function toggleFavoriteState(): Promise<void> {
    if (!isFavoriteType(props.type)) {
        return;
    }

    await toggleFavorite({
        id: props.id,
        type: props.type,
    });

    getFavorite();
}

const collectionItemCountInAllCollections: ComputedRef<number> = computed(() => {
    if (!articleState.collections) {
        return 0;
    }

    return getCollectionItemCount({
        collections: articleState.collections,
        id: props.id,
        type: props.type,
    });
});

getFavorite();
articleState.getCollections();

watch(route, () => {
    getFavorite();
    articleState.getCollections();
});
</script>

<template>
    <v-header class="article-header">
        <template v-if="$slots['pre-title']" #pre-title>
            <slot name="pre-title" />
        </template>

        <slot />

        <template #actions>
            <button
                :class="
                    cn('v-fill-transparent', {
                        'v-fill-white': collectionItemCountInAllCollections,
                    })
                "
                @click="emit('onOpenAddToCollection')"
            >
                <v-collection-count-icon>
                    {{ collectionItemCountInAllCollections }}
                </v-collection-count-icon>
            </button>

            <button v-if="isFavoriteType(type)" class="v-ml-icon" @click="toggleFavoriteState">
                <v-icon :icon="favorite ? bookmark : bookmarkOutline" />
            </button>
        </template>

        <template v-if="anchors?.length" #after>
            <v-pill-slider :slider-items="anchors" />

            <slot name="after" />
        </template>
    </v-header>
</template>
