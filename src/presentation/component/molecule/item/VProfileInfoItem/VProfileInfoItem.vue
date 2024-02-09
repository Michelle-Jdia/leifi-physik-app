<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VButton from '@/atom/button/VButton/VButton.vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('profile-info-item v-flex v-justify-between v-py-box-md', modifier)">
        <div>
            <h4 class="v-h4"><slot name="title" /></h4>

            <p
                v-if="$slots.default"
                class="v-h4 v-mt-box-sm v-inline-block v-font-fflight v-text-gray"
            >
                <slot />
            </p>
        </div>

        <v-button modifier="v-h-max v-w-max v-font-bold v-underline" fill="clear" size="none">
            Bearbeiten
        </v-button>
    </div>
</template>

<style>
ion-button {
    --background-hover: unset;
    --color: var(--ty-copy);
}
</style>
