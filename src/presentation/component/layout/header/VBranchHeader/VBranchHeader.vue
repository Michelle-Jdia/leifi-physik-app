<script setup lang="ts">
import { ref } from 'vue';
import { search } from 'ionicons/icons';
import VInput from '@/atom/input/VInput/VInput.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VHeader from '@/layout/header/VHeader.vue';

const isSearchOpen = ref(false);

function openSearch() {
    isSearchOpen.value = true;
}

function closeSearch() {
    isSearchOpen.value = false;
}
</script>

<template>
    <v-header>
        <template #pre-title>
            <slot name="pre-title" />
        </template>

        <slot v-if="!isSearchOpen" />

        <v-input v-if="isSearchOpen" variant="purple" />

        <template v-if="!isSearchOpen" #sub-title>
            <slot name="sub-title" />
        </template>

        <template #actions>
            <v-button
                v-if="!isSearchOpen"
                size="none"
                data-testid="open-search-button"
                @click="openSearch"
            >
                <v-icon :icon="search" />
            </v-button>

            <v-button v-if="isSearchOpen" data-testid="close-search-button" @click="closeSearch">
                Abbrechen
            </v-button>
        </template>

        <template #after>
            <slot name="after" />
        </template>
    </v-header>
</template>
