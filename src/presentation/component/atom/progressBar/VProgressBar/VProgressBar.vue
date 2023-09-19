<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonProgressBar } from '@ionic/vue';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';

export interface Props {
    max: number;
    current: number;
    modifier?: ClassValue;
}

const props = defineProps<Props>();

const progress: ComputedRef<number> = computed(() => {
    return props.current / props.max;
});
</script>

<template>
    <div
        :class="
            cn(
                'progress-bar v-relative v-rounded-sm v-bg-green-20 v-p-[0.25rem] md:v-p-box-sm',
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
    --background: theme(colors.green.20);
    --progress-background: theme(colors.green.80);
}
</style>
