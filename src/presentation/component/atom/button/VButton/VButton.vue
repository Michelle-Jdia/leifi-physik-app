<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { IonButton } from '@ionic/vue';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
    size?: 'default' | 'small' | 'none';
    isRounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
    isRounded: true,
});

const roundedStyle: ComputedRef<string> = computed(() => {
    if (!props.isRounded) {
        return '--border-radius: 0;';
    }

    return '';
});

const sizeStyle: ComputedRef<string> = computed(() => {
    if (props.size === 'small') {
        return '--padding-top: 0.9rem; --padding-bottom: 0.9rem;';
    }

    if (props.size === 'none') {
        return '--padding-top: 0; --padding-bottom: 0; --padding-start: 0; --padding-end: 0;';
    }

    return '--padding-top: 1.4rem; --padding-bottom: 1.4rem;';
});
</script>

<template>
    <ion-button
        :class="
            cn(
                'button v-text-cta v-h-auto v-text-h4 v-font-fflight md:v-text-h4-tablet v-normal-case v-min-w-fit',
                modifier,
            )
        "
        :style="`${sizeStyle} ${roundedStyle}`"
    >
        <slot />
    </ion-button>
</template>

<style scoped lang="scss">
.button {
    --border-radius: theme(borderRadius.sm);
    --box-shadow: none;
}
</style>
