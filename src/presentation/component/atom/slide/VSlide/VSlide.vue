<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { ref } from 'vue';
import { IonItem, IonItemOptions, IonItemSliding } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
    slideBackground?: string;
}

defineProps<Props>();

const defaultBackground = 'v-bg-white';
const item = ref(null);

function closeSlide() {
    // @ts-ignore nothing to do here
    item.value.$el.close();
}
</script>

<template>
    <ion-item-sliding ref="item" :class="cn('slide', defaultBackground, slideBackground)">
        <ion-item
            lines="none"
            :class="cn('v-px-box-xl v-py-box-md md:v-px-section-md', defaultBackground, modifier)"
        >
            <div class="v-w-full v-text-ty-headline">
                <slot />
            </div>

            <slot name="end" />
        </ion-item>

        <ion-item-options>
            <slot name="actions" :close-slide="closeSlide" />
        </ion-item-options>
    </ion-item-sliding>
</template>

<style scoped lang="scss">
.slide {
    > ion-item {
        --background: transparent;
        --inner-padding-end: 0;
    }
}
</style>
