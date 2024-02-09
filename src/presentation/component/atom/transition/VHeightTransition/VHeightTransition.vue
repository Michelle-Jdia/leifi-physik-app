<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';

export interface Props {
    isVisible: boolean;
    parentModifier?: ClassValue;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div
        v-if="$slots.default"
        :class="
            cn('height-transition v-grid v-transition-all', parentModifier, {
                open: isVisible,
            })
        "
    >
        <div :class="cn('v-overflow-hidden', modifier)">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// source https://www.stefanjudis.com/snippets/how-to-animate-height-with-css-grid/
.height-transition {
    grid-template-rows: 0fr;

    &.open {
        grid-template-rows: 1fr;
    }
}
</style>
