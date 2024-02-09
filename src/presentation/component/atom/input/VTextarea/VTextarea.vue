<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonTextarea } from '@ionic/vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-textarea
        :class="cn('textarea v-min-h-[20rem] v-bg-gray-20 v-px-box-md v-py-box-xl', modifier)"
    />
</template>
