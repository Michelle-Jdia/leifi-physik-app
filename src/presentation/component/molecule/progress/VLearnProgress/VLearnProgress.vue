<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { Props as VProgressBarProps } from '@/atom/progressBar/VProgressBar/VProgressBar.vue';
import { ref } from 'vue';
import { cn } from '@/presentation/helper/style';
import VProgressBar from '@/atom/progressBar/VProgressBar/VProgressBar.vue';
import VToggle from '@/atom/toggle/VToggle/VToggle.vue';

interface Props {
    current: VProgressBarProps['current'];
    max: VProgressBarProps['max'];
    modifier?: ClassValue;
}

defineProps<Props>();

const showProgress = ref(false);
</script>

<template>
    <div :class="cn('learn-progress', modifier)">
        <v-toggle
            v-model="showProgress"
            modifier="v-flex v-justify-end"
            data-testid="toggle-progress-bar"
        >
            <h5 class="md:v-text-h4">
                <slot>Lernmodus</slot>
            </h5>
        </v-toggle>

        <v-progress-bar
            v-if="showProgress"
            :current="current"
            :max="max"
            data-testid="progress-bar"
        />
    </div>
</template>
