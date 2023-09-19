<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    date?: string;
    type: string;
    withNotification?: boolean;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div
        :class="
            cn(
                'notification relative flex flex-col rounded-sm border border-gray-20 bg-white p-box shadow',
                modifier,
            )
        "
    >
        <v-icon
            v-if="withNotification"
            size="sm"
            data-testid="notification-icon"
            src="icon/ellipse.svg"
            modifier="absolute right-0 top-0 -translate-y-2/4 translate-x-2/4"
        />

        <div class="mb-2 flex w-full items-center justify-between">
            <v-badge modifier="mr-box bg-gray-20">{{ type }}</v-badge>

            <span class="text-h5 text-ty-headline">{{ date }}</span>
        </div>

        <h5 class="v-h5"><slot /></h5>
    </div>
</template>
