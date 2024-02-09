<script setup lang="ts">
import type { Img } from '@/presentation/type/img';
import type { ClassValue } from 'clsx';
import { IonImg } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    img: Img;
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('topic-image-box v-relative', modifier)">
        <ion-img class="v-h-full v-object-cover v-object-top" :src="img.src" :alt="img.alt" />

        <div
            class="v-absolute v-left-0 v-top-0 v-h-[9rem] v-w-full v-bg-gradient-to-t v-from-white/[.8] v-from-40% v-content-[''] md:v-h-[11rem]"
        />

        <h4
            class="v-h4 v-absolute v-bottom-0 v-left-0 v-w-full v-hyphens-auto v-px-box v-pb-box v-text-left v-font-bold"
        >
            <slot />
        </h4>
    </div>
</template>
