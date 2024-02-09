<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue/dist/vue';
import { IonSearchbar } from '@ionic/vue';
import { computed, ref } from 'vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    variant?: 'default' | 'purple';
    modifier?: ClassValue;
}

const emit = defineEmits<{
    (e: 'onSubmit', { value }: { value: string }): void;
}>();

const props = defineProps<Props>();
const model = ref('');

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

const variantClass: ComputedRef<string> = computed(() => {
    if (props.variant === 'purple') {
        return 'variant-purple';
    }

    return 'variant-default';
});
</script>

<template>
    <ion-searchbar
        v-model.trim="model"
        :maxlength="255"
        :minlength="1"
        show-cancel-button="focus"
        cancel-button-text="Abbrechen"
        :class="cn('search-bar !v-text-sm !md:v-text-copy !v-p-0 ', variantClass, modifier)"
        @keydown="handleKeyPress"
        @keydown.enter="handleEnterPress"
    />
</template>
