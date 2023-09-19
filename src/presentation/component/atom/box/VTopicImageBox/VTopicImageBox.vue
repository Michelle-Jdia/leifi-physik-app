<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { Img } from '@/presentation/type/img';
import { cn } from '@/presentation/helper/style';
import { IonImg } from '@ionic/vue';

interface Props {
    img: Img;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('topic-image-box v-relative v-grayscale', modifier)">
        <ion-img class="v-h-full v-object-cover v-object-top" :src="img.src" :alt="img.alt" />

        <h4
            class="v-h4 v-absolute v-bottom-0 v-left-0 v-w-full v-hyphens-auto v-bg-white v-px-box v-pb-box v-text-left v-font-bold"
        >
            <div
                class="v-absolute v-left-0 v-top-0 v-h-[9rem] v-w-full v--translate-y-full v-bg-gradient-to-t v-from-white v-content-['']"
            />

            <slot />
        </h4>
    </div>
</template>
