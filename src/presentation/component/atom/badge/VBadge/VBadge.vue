<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonBadge } from '@ionic/vue';

interface Props {
    modifier?: ClassValue;
    color?: string;
}

defineProps<Props>();
</script>

<template>
    <ion-badge
        :class="
            cn(
                'badge v-rounded v-bg-gray-20 v-p-box-xs v-text-copy-xs v-text-ty-headline md:v-text-copy',
                modifier,
                color,
            )
        "
    >
        <slot />
    </ion-badge>
</template>
