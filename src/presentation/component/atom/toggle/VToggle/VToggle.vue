<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonToggle } from '@ionic/vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('toggle v-flex v-items-center v-text-ty-headline', modifier)">
        <slot />

        <ion-toggle v-bind="$attrs" />
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
