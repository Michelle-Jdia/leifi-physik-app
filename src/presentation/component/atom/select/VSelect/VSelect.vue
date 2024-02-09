<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonItem, IonList, IonSelect } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-list :class="cn('select', modifier)">
        <ion-item>
            <ion-select
                v-bind="$attrs"
                class="v-flex-row-reverse v-rounded-sm v-bg-primary v-pl-box-sm v-pr-box v-font-fflight v-text-white"
            >
                <slot name="option" />
            </ion-select>
        </ion-item>
    </ion-list>
</template>

<style scoped lang="scss">
.select {
    ion-item {
        --show-full-highlight: 0;
        --border-width: 0;
    }

    ion-select {
        --placeholder-color: theme(colors.white.DEFAULT);
        --placeholder-opacity: 1;
    }
}

ion-select::part(icon) {
    @apply v-mr-icon v-text-white v-opacity-100;
}
</style>
