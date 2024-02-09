<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { ref } from 'vue';
import { cn } from '@/presentation/helper/style';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VInput from '@/atom/input/VInput/VInput.vue';

interface Props {
    icon?: string;
    placeholder?: string;
    buttonText?: string;
    isGrid?: boolean;
    modifier?: ClassValue;
}

const emit = defineEmits<{
    (e: 'onSubmit', { value }: { value: string }): void;
}>();

const props = defineProps<Props>();
const model = ref('');

const buttonClass = {
    'v-mt-box-md md:v-mt-0': props.isGrid,
};

const wrapperClass = {
    'v-grid v-grid-cols-1 v-gap-x-box-md md:v-grid-cols-2': props.isGrid,
};
</script>

<template>
    <div :class="cn('input-button v-mt-box md:v-mt-box-lg', modifier, wrapperClass)">
        <v-input
            v-model="model"
            :placeholder="placeholder"
            variant="flat"
            @on-submit="emit('onSubmit', { value: model })"
        />

        <v-button
            :modifier="cn('v-mt-box-md v-w-full', buttonClass)"
            @click="emit('onSubmit', { value: model })"
        >
            <v-icon :src="icon" with-space-right />

            {{ buttonText }}
        </v-button>
    </div>
</template>
