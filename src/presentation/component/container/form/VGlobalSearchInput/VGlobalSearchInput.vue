<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { $t } from '@/application/translation';
import { navigateToCollectionOrSearch } from '@/store/searchStore';
import { cn } from '@/presentation/helper/style';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VSearchBar from '@/atom/search/VSearchBar/VSearchBar.vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();

function startSearch({ value }: { value: string }) {
    // {value} takes out the "value" field from the object. Also called "destructuring".
    navigateToCollectionOrSearch(value);
}
</script>

<template>
    <div :class="cn('global-search-input', modifier)">
        <v-loader :logs="['useCollectionByTitle']" />

        <v-search-bar
            :class="cn('global-search-input', modifier)"
            :placeholder="$t.search.globalSearchPlaceholder"
            @on-submit="startSearch"
        />
    </div>
</template>
