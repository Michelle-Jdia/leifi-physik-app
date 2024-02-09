<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    toggleIcon?: string;
    modifier?: ClassValue;
}

withDefaults(defineProps<Props>(), {
    toggleIcon: '',
});
</script>

<template>
    <ion-accordion-group :class="cn('accordion', modifier)">
        <ion-accordion :toggle-icon="toggleIcon">
            <ion-item slot="header">
                <ion-label>
                    <div class="v-text-primary v-underline">
                        <slot name="label" />
                    </div>
                </ion-label>
            </ion-item>

            <div slot="content">
                <slot />
            </div>
        </ion-accordion>
    </ion-accordion-group>
</template>
