<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import { chevronForward } from 'ionicons/icons';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('anchor-item v-flex v-items-center', modifier)">
        <v-icon class="v-mr-box-xs" data-testid="link-icon" size="sm" :icon="chevronForward" />

        <a v-bind="$attrs" class="v-font-light v-leading-md v-text-primary v-underline"><slot /></a>
    </div>
</template>
