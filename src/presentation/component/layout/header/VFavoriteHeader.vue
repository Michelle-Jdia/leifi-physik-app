<script setup lang="ts">
import { pencil } from 'ionicons/icons';
import VHeader from '@/layout/header/VHeader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

// interface Props {
//     id: string;
//     type: FavoriteTypeKey;
//     isCollection?: boolean;
// }
// const props = defineProps<Props>();
</script>

<template>
    <v-header>
        <h1 v-if="$slots.default" class="text-h3 text-white">
            <slot />
        </h1>

        <template #actions>
            <v-button>
                <v-icon slot="icon-only" modifier="text-white" size="md" :icon="pencil" />
            </v-button>
        </template>
    </v-header>
</template>
