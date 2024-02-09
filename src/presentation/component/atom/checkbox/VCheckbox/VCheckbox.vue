<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-item :class="cn('checkbox v-rounded', modifier)" lines="none">
        <ion-checkbox slot="start" class="v-m-0" v-bind="$attrs" />

        <ion-label v-if="$slots.default" class="v-ml-box">
            <span class="h4">
                <slot />
            </span>
        </ion-label>
    </ion-item>
</template>

<style scoped lang="scss">
.checkbox {
    > ion-checkbox {
        --size: 1.6rem;
        --background: var(--gray-20);
        --background-checked: var(--gray-20);
        --border-color: var(--gray-50);
        --border-color-checked: var(--ty-headline);
        --border-width: 0.15rem;
        --checkmark-color: var(--ty-headline);
        --checkmark-width: 0.2rem;
    }

    > ion-checkbox::part(container) {
        @apply v-rounded v-p-1;
    }
}
</style>
