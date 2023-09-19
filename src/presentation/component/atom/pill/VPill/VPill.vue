<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';

interface Props {
    size?: 'sm';
    variant?: 'white' | 'purple';
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const size = {
    'v-py-2 v-px-box-xs': props.size === 'sm',
};

const variant = {
    'v-bg-white v-text-purple': props.variant === 'white',
    'v-bg-purple v-text-white': props.variant === 'purple',
};
</script>

<template>
    <div
        :class="
            cn(
                'pill v-inline-flex v-rounded-lg v-bg-purple-80 v-px-box v-py-box-xs v-text-sm v-text-white md:v-text-copy',
                modifier,
                size,
                variant,
            )
        "
    >
        <slot />
    </div>
</template>
