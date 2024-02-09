<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { IonProgressBar } from '@ionic/vue';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';

export interface Props {
    max: number;
    current: number;
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const progress: ComputedRef<number> = computed(() => {
    return props.current / props.max;
});

interface Color {
    background: string;
    progressbar: string;
    wrapper: string;
}

const color: ComputedRef<Color> = computed(() => {
    switch (props.current) {
        case 0:
            return {
                background: 'var(--ion-color-pink-20)',
                progressbar: 'var(--ion-color-pink-80)',
                wrapper: 'v-bg-pink-20',
            };
        case props.max:
            return {
                background: 'var(--ion-color-green-20)',
                progressbar: 'var(--ion-color-green-80)',
                wrapper: 'v-bg-green-20',
            };
        default:
            return {
                background: 'var(--ion-color-yellow-20)',
                progressbar: 'var(--ion-color-yellow-80)',
                wrapper: 'v-bg-yellow-20',
            };
    }
});
</script>

<template>
    <div
        :class="
            cn(
                color.wrapper,
                'progress-bar v-relative v-rounded-sm v-p-[0.25rem] md:v-p-box-sm',
                modifier,
            )
        "
    >
        <ion-progress-bar class="v-h-[1.75rem] v-rounded-sm md:v-h-[2rem]" :value="progress" />

        <h5 class="md:v-h4 v-absolute v-left-icon v-top-1/2 v--translate-y-1/2 md:v-left-box-md">
            {{ current }} von {{ max }} Inhalten gelernt
        </h5>
    </div>
</template>

<style scoped lang="scss">
ion-progress-bar {
    --background: v-bind(color.background);
    --progress-background: v-bind(color.progressbar);
}
</style>
