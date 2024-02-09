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
    <div
        :class="
            cn(
                'link-item v-flex v-items-center v-justify-between v-rounded-sm v-border v-border-gray-20 v-bg-white v-p-box v-shadow',
                modifier,
            )
        "
    >
        <h5 class="v-text-sm md:v-text-h3"><slot /></h5>

        <v-task-icon :color="level" src="icon/lamp.svg" with-space-left />
    </div>
</template>
