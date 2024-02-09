<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonBadge } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    color?: string;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-badge
        :class="
            cn(
                'badge v-rounded v-bg-gray-20 v-p-box-xs v-text-copy-xs v-text-ty-headline md:v-text-copy v-transition-colors',
                modifier,
                color,
            )
        "
    >
        <slot />
    </ion-badge>
</template>
