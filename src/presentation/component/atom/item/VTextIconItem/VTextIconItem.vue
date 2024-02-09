<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VTaskIcon from '@/atom/icon/VTaskIcon/VTaskIcon.vue';

interface Props {
    level?: string;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('text-icon-item v-flex v-items-center', modifier)">
        <p class="v-p v-capitalize"><slot /></p>

        <v-task-icon :color="level" src="icon/lamp.svg" with-space-left />
    </div>
</template>
