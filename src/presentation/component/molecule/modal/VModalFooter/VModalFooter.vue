<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('modal-footer', modifier)">
        <div v-if="$slots.before" class="v-bg-white v-p-box-xl">
            <slot name="before" />
        </div>

        <div class="v-flex v-border-t v-border-gray-50 v-bg-white v-p-box-xl">
            <slot />
        </div>
    </div>
</template>
