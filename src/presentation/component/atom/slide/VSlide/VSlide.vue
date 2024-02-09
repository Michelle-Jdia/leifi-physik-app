<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { Ref } from 'vue';
import { IonItem, IonItemOptions, IonItemSliding } from '@ionic/vue';
import { ref } from 'vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
    slideBackground?: string;
}

defineProps<Props>();

const defaultBackground = 'v-bg-white';
const item: Ref<InstanceType<typeof IonItemSliding> | null> = ref(null);

function closeSlide() {
    item.value?.$el.close();
}
</script>

<template>
    <ion-item-sliding ref="item" :class="cn('slide', defaultBackground, slideBackground)">
        <ion-item
            lines="none"
            :class="cn('v-px-box-xl v-py-box-md md:v-px-section-md', defaultBackground, modifier)"
        >
            <div class="v-w-full v-text-ty-headline">
                <div class="v-flex v-items-center v-justify-between">
                    <div>
                        <slot />
                    </div>

                    <slot name="end" />
                </div>

                <div v-if="$slots.after" class="v-mt-box">
                    <slot name="after" />
                </div>
            </div>
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
