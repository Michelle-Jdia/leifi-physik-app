<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';

export interface Props {
    id?: string;
    size?: 'sm';
    variant?: 'default' | 'white' | 'purple' | 'pink';
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const size = {
    'v-py-2 v-px-box-xs': props.size === 'sm',
};

const variant: ComputedRef<string> = computed(() => {
    if (props.variant === 'white') {
        return 'v-bg-white v-text-purple';
    }

    if (props.variant === 'purple') {
        return 'v-bg-purple v-text-white';
    }

    if (props.variant === 'pink') {
        return 'v-bg-purple-20 v-text-purple';
    }

    return 'v-text-white v-bg-purple-80';
});
</script>

<template>
    <button
        :class="
            cn(
                'pill v-inline-flex v-rounded-lg v-transition-colors v-px-box v-py-box-xs v-text-sm  md:v-text-copy',
                modifier,
                size,
                variant,
            )
        "
    >
        <slot />
    </button>
</template>
