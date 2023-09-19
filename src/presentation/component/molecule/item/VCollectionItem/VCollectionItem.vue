<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    title: string;
    branch?: {
        title: string;
        color: string;
    };
    withNotification?: boolean;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div
        :class="
            cn(
                'collection-item v-relative v-flex v-items-center v-justify-between v-rounded-sm v-border v-border-gray-20 v-bg-white v-p-box v-shadow',
                modifier,
            )
        "
    >
        <h3 class="v-h3">{{ title }}</h3>

        <v-icon
            v-if="withNotification"
            size="sm"
            data-testid="collection-item-notification"
            src="icon/ellipse.svg"
            modifier="v-absolute v-right-0 v-top-0 v--translate-y-2/4 v-translate-x-2/4"
        />

        <v-icon
            v-if="!branch"
            size="sm"
            data-testid="collection-item-feed"
            src="icon/bond.svg"
            with-space-left
        />

        <v-badge v-if="branch" :style="branch.color" modifier="v-ml-box-sm">
            {{ branch.title }}
        </v-badge>
    </div>
</template>
