<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { IonInput } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    modifier?: ClassValue;
    icon?: string;
    variant?: 'flat' | 'purple';
}
const props = defineProps<Props>();

const variant = {
    'v-px-box-md v-py-box-xl v-border-none': props.variant === 'flat',
    'v-bg-purple-50 v-text-white v-border-none': props.variant === 'purple',
};

const size: ComputedRef<string> = computed(() => {
    if (props.variant === 'flat') {
        return '--padding-top: 1.5rem; --padding-bottom: 1.5rem;';
    }

    return '';
});
</script>

<template>
    <ion-input
        :class="
            cn(
                'input v-flex v-flex-row-reverse v-rounded-sm v-border v-border-primary v-bg-gray-20 v-text-sm md:v-text-copy',
                modifier,
                variant,
            )
        "
        :style="`--padding-start: 1rem; --padding-end: 1rem; ${size}`"
    >
        <v-icon
            v-if="icon"
            with-space-left
            with-space-right
            :src="icon"
            :icon="icon"
            modifier="v-text-ty-helper"
        />
    </ion-input>
</template>
