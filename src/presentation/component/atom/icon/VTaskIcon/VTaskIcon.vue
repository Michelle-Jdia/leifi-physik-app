<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { TaskColor } from '@/data/type/app/task';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    color?: string;
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const iconColor: ComputedRef<string> = computed(() => {
    if (!props.color || !Object.keys(TaskColor).includes(props.color)) {
        return '';
    }

    // @ts-ignore
    return TaskColor[props.color];
});
</script>

<template>
    <v-icon v-if="iconColor" :class="cn('task-icon', modifier)" :color="iconColor" size="sm" />
</template>
