<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';

interface Props {
    size?: 'default' | 'big';
    modifier?: ClassValue;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const sizeClass: ComputedRef<Record<string, boolean>> = computed(() => {
    return {
        'px-box-lg py-box': props.size === 'default',
        'px-section-md py-box-lg': props.size === 'big',
    };
});
</script>

<template>
    <button :class="cn('button flex items-center rounded bg-purple-50', modifier, sizeClass)">
        <div class="mr-box"><slot name="before" /></div>

        <slot />

        <div class="ml-box"><slot name="after" /></div>
    </button>
</template>
