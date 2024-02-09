<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonIcon } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    size?: 'xs' | 'sm' | 'default';
    withSpaceLeft?: boolean;
    withSpaceRight?: boolean;
    modifier?: ClassValue;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const iconSize = {
    'v-min-h-[0.5rem] v-min-w-[0.5rem] v-w-[0.5rem] v-h-[0.5rem]': props.size === 'xs',
    'v-min-h-[1rem] v-min-w-[1rem] v-w-[1rem] v-h-[1rem]': props.size === 'sm',
    'v-min-h-[1.25rem] v-min-w-icon-default v-w-icon-default v-h-[1.25rem]':
        props.size === 'default',
};

const iconLeftRightSpace = {
    'v-ml-icon': props.withSpaceLeft,
    'v-mr-icon': props.withSpaceRight,
};
</script>

<template>
    <ion-icon :class="cn('icon', modifier, iconSize, iconLeftRightSpace)" />
</template>
