<script setup lang="ts">
// import { notificationsOutline } from 'ionicons/icons';
import VHeader from '@/layout/header/VHeader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    isHistory: boolean;
}
defineProps<Props>();
</script>

<template>
    <v-header>
        <slot />

        <template #actions>
            <v-button
                v-if="isHistory"
                size="none"
                :router-link="{ name: 'history-index' }"
                modifier="!v-ml-box"
            >
                <v-icon src="icon/history.svg" />
            </v-button>

            <v-button size="none" :router-link="{ name: 'settings-index' }" modifier="!v-ml-box">
                <v-icon src="icon/settings.svg" />
            </v-button>
        </template>
    </v-header>
</template>
