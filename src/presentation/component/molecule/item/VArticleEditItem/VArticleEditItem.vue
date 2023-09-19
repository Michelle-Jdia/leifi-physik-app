<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonReorder } from '@ionic/vue';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    id: string;
    title: string;
    subtitle: string;
    withCopy?: boolean;
    modifier?: ClassValue;
}

defineProps<Props>();

const emit = defineEmits<{
    (e: 'onCheck', { id, isChecked }: { id: string; isChecked: boolean }): void;
    (e: 'onDelete', { id }: { id: string }): void;
    (e: 'onCopy', { id }: { id: string }): void;
}>();
</script>

<template>
    <div
        :class="
            cn('article-edit-item v-flex v-items-center v-rounded v-bg-white v-p-box', modifier)
        "
        lines="none"
    >
        <v-checkbox
            modifier="v-mr-auto v-w-full"
            :value="id"
            @ion-change="(event) => emit('onCheck', { id, isChecked: event.target.checked })"
        >
            {{ title }}

            <div class="v-h5 v-text-ty-helper">{{ subtitle }}</div>
        </v-checkbox>

        <div class="v-ml-box v-flex">
            <v-icon
                v-if="withCopy"
                modifier="v-mr-box-xl v-cursor-pointer"
                src="icon/copy.svg"
                data-testid="article-edit-item-copy"
                @click="emit('onCopy', { id })"
            />

            <v-icon
                modifier="v-cursor-pointer"
                src="icon/close.svg"
                data-testid="article-edit-item-close"
                @click="emit('onDelete', { id })"
            />

            <ion-reorder slot="end" class="v-ml-box-xl">
                <v-icon src="icon/dots.svg" data-testid="article-edit-item-reorder" />
            </ion-reorder>
        </div>
    </div>
</template>
