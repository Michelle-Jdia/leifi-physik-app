<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonPage, IonContent } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-page>
        <slot name="header" />

        <ion-content>
            <div :class="cn('v-p-box-xl md:v-p-section', modifier)">
                <slot />
            </div>
        </ion-content>
    </ion-page>
</template>
