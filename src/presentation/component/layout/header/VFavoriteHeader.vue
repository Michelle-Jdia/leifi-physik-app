<script setup lang="ts">
import { pencil } from 'ionicons/icons';
import VHeader from '@/layout/header/VHeader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    withEditMode: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
    (e: 'onOpenEditModal'): void;
}>();
</script>

<template>
    <v-header>
        <slot />

        <template #actions>
            <v-button v-if="withEditMode" size="none" @click="emit('onOpenEditModal')">
                <v-icon :icon="pencil" />
            </v-button>
        </template>
    </v-header>
</template>
