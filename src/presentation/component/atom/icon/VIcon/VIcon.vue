<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonIcon } from '@ionic/vue';

interface Props {
    size?: 'sm' | 'md' | 'default';
    withSpaceLeft?: boolean;
    withSpaceRight?: boolean;
    modifier?: ClassValue;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const iconSize = {
    'v-min-h-[1rem] v-min-w-[1rem] v-w-[1rem] v-h-[1rem]': props.size === 'sm',
    'v-min-h-[1.5rem] v-min-w-[1.5rem] w-[1.5rem] v-h-[1.5rem]': props.size === 'default',
    'v-min-h-[2rem] v-min-w-[2rem] v-w-[2rem] v-h-[2rem]': props.size === 'md',
};

const iconLeftRightSpace = {
    'v-ml-icon': props.withSpaceLeft,
    'v-mr-icon': props.withSpaceRight,
};
</script>

<template>
    <ion-icon :class="cn('icon', modifier, iconSize, iconLeftRightSpace)" />
</template>
