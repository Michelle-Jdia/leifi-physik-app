<script setup lang="ts">
import VHeader from '@/layout/header/VHeader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

const emit = defineEmits<{
    (e: 'onOpenAddModal'): void;
}>();
</script>

<template>
    <v-header>
        <slot />

        <template #actions>
            <v-button id="collection-add-modal" size="none" @click="emit('onOpenAddModal')">
                <v-icon src="icon/plus.svg" />
            </v-button>
        </template>
    </v-header>
</template>
