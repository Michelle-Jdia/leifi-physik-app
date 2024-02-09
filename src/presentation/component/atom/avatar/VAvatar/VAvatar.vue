<script setup lang="ts">
import type { Img } from '@/presentation/type/img';
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { IonAvatar } from '@ionic/vue';
import { computed } from 'vue';
import { breakpoints as mediaBreakpoints } from '@/presentation/helper/breakpoint';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
    img?: Img;
}

const props = defineProps<Props>();

const imgSrc: ComputedRef<string> = computed(() => {
    if (props.img?.src) {
        return props.img.src;
    }

    if (window.innerWidth > mediaBreakpoints.mobile) {
        return 'icon/profile-tablet.svg';
    }

    return 'icon/profile.svg';
});

const imgAlt: ComputedRef<string> = computed(() => props.img?.alt || 'avatar');
</script>

<template>
    <ion-avatar :class="cn('avatar', modifier)">
        <img class="v-h-full v-w-full" :alt="imgAlt" :src="imgSrc" />
    </ion-avatar>
</template>
