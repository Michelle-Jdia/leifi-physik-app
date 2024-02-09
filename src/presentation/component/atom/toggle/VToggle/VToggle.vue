<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonToggle } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineOptions({
    inheritAttrs: false,
});

defineProps<Props>();
</script>

<template>
    <div :class="cn('toggle v-flex v-items-center v-text-ty-headline', modifier)">
        <slot />

        <ion-toggle class="v-ml-box" v-bind="$attrs" />
    </div>
</template>

<style scoped lang="scss">
ion-toggle {
    height: 1.4rem;

    --handle-width: 1.2rem;
    --handle-height: 1.2rem;
    --background: theme(colors.purple.20);
    --handle-background: theme(colors.purple.DEFAULT);
    --background-checked: theme(colors.purple.DEFAULT);
    --handle-background-checked: theme(colors.purple.20);
    --handle-spacing: 0.1rem;
}
</style>
