<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-accordion-group :class="cn('accordion', modifier)">
        <ion-accordion toggle-icon="false">
            <ion-item slot="header">
                <ion-label>
                    <slot name="accordion-label" />
                </ion-label>
            </ion-item>

            <div slot="content"><slot /></div>
        </ion-accordion>
    </ion-accordion-group>
</template>
