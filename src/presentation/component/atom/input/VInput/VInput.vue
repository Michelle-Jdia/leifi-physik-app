<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { IonInput } from '@ionic/vue';
import { computed, ref, useAttrs } from 'vue';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    icon?: string;
    withClearInput?: boolean;
    iconModifier?: ClassValue;
    variant?: 'flat' | 'purple';
    modifier?: ClassValue;
}

const emit = defineEmits<{
    (e: 'onSubmit', { value }: { value: string }): void;
}>();

const props = withDefaults(defineProps<Props>(), {
    withClearInput: true,
});

const attrs = useAttrs();
const model = ref('');
const padding = 1;

const variant = {
    'v-px-box-md v-py-box-xl v-border-none': props.variant === 'flat',
    'v-bg-purple-50 v-text-white v-border-none': props.variant === 'purple',
};

function handleKeyPress(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const matchTwoSpacesOrMore = / {2,}/g;

    target.value = target.value.replace(matchTwoSpacesOrMore, ' ');
}

function handleEnterPress() {
    emit('onSubmit', {
        value: model.value,
    });
}

const size: ComputedRef<string> = computed(() => {
    if (props.variant === 'flat') {
        return '--padding-top: 1.5rem; --padding-bottom: 1.5rem;';
    }

    return '';
});

const showIcon: ComputedRef<boolean> = computed(() => {
    if (props.withClearInput) {
        return Boolean(props.icon && !model.value);
    }

    return Boolean(props.icon);
});

const endPadding: ComputedRef<number> = computed(() => {
    if (showIcon.value) {
        // input left  padding + icon size + right padding
        return padding + 1 + 1;
    }

    return padding;
});
</script>

<template>
    <div :class="cn('input v-relative', modifier)">
        <ion-input
            v-model.trim="model"
            :maxlength="255"
            :minlength="1"
            :class="
                cn(
                    'v-transition-colors v-rounded-sm v-border v-border-primary v-bg-gray-20 v-text-sm md:v-text-copy',
                    variant,
                )
            "
            :style="`--padding-start: ${padding}rem; --padding-end: ${endPadding}rem; ${size}`"
            v-bind="attrs"
            :clear-input="withClearInput"
            @keydown="handleKeyPress"
            @keydown.enter="handleEnterPress"
        />

        <v-icon
            v-if="showIcon"
            :src="icon"
            :icon="icon"
            size="sm"
            :modifier="`v-absolute v-right-[1rem] v-top-1/2 v--translate-y-1/2 ${iconModifier} v-z-10`"
            @click="emit('onSubmit', { value: model })"
        />
    </div>
</template>
