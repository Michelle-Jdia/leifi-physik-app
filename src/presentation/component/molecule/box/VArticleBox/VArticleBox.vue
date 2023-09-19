<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import VBadge from '@/atom/badge/VBadge/VBadge.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

export interface Props {
    title: string;
    subtitle?: string;
    isLearned?: boolean;
    withNotification?: boolean;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div
        :class="
            cn(
                'article-box v-relative v-flex v-min-h-[10rem] v-flex-col v-items-start v-justify-end v-hyphens-auto v-rounded-sm v-border v-border-gray-20 v-bg-white v-p-box v-text-left v-shadow',
                modifier,
            )
        "
    >
        <v-icon
            v-if="withNotification"
            size="sm"
            data-testid="article-box-notification-icon"
            src="icon/ellipse.svg"
            modifier="v-absolute v-right-0 v-top-0 v--translate-y-2/4 v-translate-x-2/4"
        />

        <v-badge v-if="!isLearned" modifier="v-mb-auto v-bg-gray-50">nicht gelernt</v-badge>

        <div class="v-mt-box">
            <slot />
        </div>

        <h4 class="v-h4">{{ title }}</h4>

        <h5 v-if="subtitle" class="v-h5 v-text-ty-helper">
            {{ subtitle }}
        </h5>
    </div>
</template>
