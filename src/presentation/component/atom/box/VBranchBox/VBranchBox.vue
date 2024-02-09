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
    <div
        :class="
            cn(
                'branch-box v-flex v-min-h-[3.2rem] v-items-center v-rounded v-border v-border-gray-50 v-bg-gray-20 v-p-box-sm md:v-min-h-[3.5rem]',
                modifier,
            )
        "
    >
        <ion-img
            class="v-w-[1.75rem] v-min-w-[1.75rem] v-overflow-hidden v-rounded md:v-w-[2.25rem] md:v-min-w-[2.25rem]"
            :src="img.src"
            :alt="img.alt"
        />

        <h2
            v-if="$slots.default"
            class="v-ml-icon v-overflow-hidden v-hyphens-auto v-font-fflight v-text-sm v-text-ty-headline md:v-text-h4"
        >
            <slot />
        </h2>
    </div>
</template>
