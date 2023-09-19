<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonCheckbox, IonLabel, IonItem } from '@ionic/vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-item :class="cn('checkbox rounded', modifier)" lines="none">
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
        --background: var(--ion-color-gray-20);
        --background-checked: var(--ion-color-gray-20);
        --border-color: var(--ion-color-gray-50);
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
