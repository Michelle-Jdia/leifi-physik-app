<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    subtitle: string;
    privateTitle: string;
    isSubscribed?: boolean;
    isLearnMode?: boolean;
    learnStatus?: string;
    withNotification?: boolean;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div
        :class="
            cn(
                'collection-item v-relative v-flex v-items-start v-justify-between v-rounded-sm v-border v-border-gray-20 v-bg-white v-p-box v-shadow',
                modifier,
            )
        "
    >
        <div>
            <h3 class="v-h3">{{ privateTitle }}</h3>

            <p class="v-p v-mt-1 v-text-gray">{{ subtitle }}</p>
        </div>

        <v-icon
            v-if="isSubscribed && withNotification"
            size="sm"
            data-testid="collection-item-notification"
            src="icon/ellipse.svg"
            modifier="v-absolute v-right-0 v-top-0 v--translate-y-2/4 v-translate-x-2/4"
        />

        <v-icon
            v-if="isSubscribed"
            size="sm"
            data-testid="collection-item-feed"
            src="icon/bond.svg"
            with-space-left
            modifier="v-text-primary"
        />

        <v-badge v-if="isLearnMode && learnStatus" modifier="v-ml-box-sm">
            {{ learnStatus }}
        </v-badge>
    </div>
</template>
