<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';
import { IonButton } from '@ionic/vue';

interface Props {
    modifier?: ClassValue;
    size?: 'default' | 'small' | 'none';
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const sizeStyle: ComputedRef<string> = computed(() => {
    if (props.size === 'small') {
        return '--padding-top: 0.9rem; --padding-bottom: 0.9rem;';
    }

    if (props.size === 'none') {
        return '--padding-top: 0; --padding-bottom: 0;';
    }

    return '--padding-top: 1.4rem; --padding-bottom: 1.4rem;';
});
</script>

<template>
    <ion-button
        :class="cn('button v-text-cta v-h-auto v-w-full v-text-h4 md:v-text-h4-tablet', modifier)"
        :style="sizeStyle"
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
