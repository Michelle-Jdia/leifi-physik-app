<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
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
        <h5 class="v-text-h5 md:v-text-h3"><slot /></h5>

        <v-icon with-space-left data-testid="link-icon" size="sm" src="icon/lamp.svg" />
    </div>
</template>
