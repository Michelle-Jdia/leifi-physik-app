<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { addOutline } from 'ionicons/icons';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    type?: 'add' | 'content';
    modifier?: ClassValue;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'content',
});

const icon: ComputedRef<string> = computed(() => {
    if (props.type === 'add') {
        return addOutline;
    }

    return 'icon/all-content.svg';
});

const text: ComputedRef<string> = computed(() => {
    if (props.type === 'add') {
        return 'Artikel hinzufügen';
    }

    return 'Alle Inhalte durchsuchen';
});

const sizeStlye = {
    'v-p-[3.8rem] md:v-p-[1.5rem]': props.type === 'content',
    'v-p-[2.2rem] md:v-p-[2.5rem]': props.type === 'add',
};
</script>

<template>
    <button
        :class="
            cn(
                'content-placeholder v-flex v-w-full v-items-center v-justify-center v-rounded-sm v-border v-border-dashed v-border-gray-50 v-bg-white',
                modifier,
                sizeStlye,
            )
        "
    >
        <v-icon with-space-right size="sm" :src="icon" />

        <h4 class="v-h4">{{ text }}</h4>
    </button>
</template>
