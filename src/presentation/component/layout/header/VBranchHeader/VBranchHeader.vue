<script setup lang="ts">
import { search } from 'ionicons/icons';
import { ref } from 'vue';
import { $t } from '@/application/translation';
import VHeader from '@/layout/header/VHeader.vue';
import VPillSlider from '@/molecule/slider/VPillSlider/VPillSlider.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VSearchBar from '@/atom/search/VSearchBar/VSearchBar.vue';

interface Props {
    isSearchEnabled?: boolean;
    searchQuery?: string;
    anchors?: HTMLHeadingElement[];
    searchSliderItems?: string[];
}

const props = withDefaults(defineProps<Props>(), {
    isSearchEnabled: true,
});

const emit = defineEmits<{
    (e: 'onSubmit', value: string): void;
    (e: 'onPillClick', text: string): void;
}>();

const isSearchOpen = ref(false);
const inputModel = ref('');

function openSearch() {
    isSearchOpen.value = true;
}

function closeSearch() {
    isSearchOpen.value = false;
}

function getSearchQuery() {
    if (props.searchQuery) {
        openSearch();
        inputModel.value = props.searchQuery;
    }
}

function handlePillClick(text: string): void {
    emit('onPillClick', text);
}

getSearchQuery();
</script>

<template>
    <v-header>
        <template v-if="!isSearchOpen && $slots['pre-title']" #pre-title>
            <slot name="pre-title" />
        </template>

        <slot v-if="!isSearchOpen" />

        <div v-if="isSearchEnabled" class="v-flex v-w-full v-items-center">
            <v-search-bar
                v-if="isSearchOpen"
                v-model="inputModel"
                variant="purple"
                show-cancel-button="always"
                modifier="v-w-full"
                :placeholder="$t.search.globalSearchPlaceholder"
                @on-submit="emit('onSubmit', inputModel)"
                @ion-cancel="closeSearch"
            />
        </div>

        <template v-if="!isSearchOpen && $slots['sub-title']" #sub-title>
            <slot name="sub-title" />
        </template>

        <template v-if="!isSearchOpen && isSearchEnabled" #actions>
            <v-button size="small" data-testid="open-search-button" @click="openSearch">
                <v-icon :icon="search" />
            </v-button>
        </template>

        <template v-if="anchors?.length || searchSliderItems?.length" #after>
            <v-pill-slider
                v-if="anchors?.length"
                :slider-items="anchors"
                @on-click="handlePillClick"
            />

            <v-pill-slider
                v-if="searchSliderItems?.length"
                :slider-items="searchSliderItems"
                @on-click="handlePillClick"
            />

            <slot name="after" />
        </template>
    </v-header>
</template>
