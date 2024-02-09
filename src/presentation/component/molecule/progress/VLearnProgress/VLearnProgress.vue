<script setup lang="ts">
import type { Props as VProgressBarProps } from '@/atom/progress/VProgressBar/VProgressBar.vue';
import type { ClassValue } from 'clsx';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { cn } from '@/presentation/helper/style';
import VProgressBar from '@/atom/progress/VProgressBar/VProgressBar.vue';
import VToggle from '@/atom/toggle/VToggle/VToggle.vue';
import VTransition from '@/atom/transition/VTransition/VTransition.vue';

interface Props {
    current: VProgressBarProps['current'];
    max: VProgressBarProps['max'];
    modifier?: ClassValue;
    isLearnMode: boolean;
}
const props = defineProps<Props>();
const showProgress: Ref<boolean> = ref(props.isLearnMode);

const emit = defineEmits<{
    (e: 'onToggle', isLearnMode: boolean): void;
}>();
</script>

<template>
    <div :class="cn('learn-progress', modifier)">
        <div class="v-flex v-items-center">
            <slot name="left-side" />

            <v-toggle
                v-model="showProgress"
                modifier="v-flex v-ml-auto"
                data-testid="toggle-progress-bar"
                @ion-change="emit('onToggle', showProgress)"
            >
                <h5 class="md:v-text-h4">
                    <slot>Lernmodus</slot>
                </h5>
            </v-toggle>
        </div>

        <v-transition type="slide-down">
            <v-progress-bar
                v-if="showProgress"
                class="v-mt-box"
                :current="current"
                :max="max"
                data-testid="progress-bar"
            />
        </v-transition>
    </div>
</template>
