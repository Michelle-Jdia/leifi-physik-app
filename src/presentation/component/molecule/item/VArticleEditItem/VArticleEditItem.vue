<script setup lang="ts">
import type { AllowedTypes } from '@/presentation/type/favorite';
import type { ClassValue } from 'clsx';
import type { WritableComputedRef } from 'vue';
import { IonReorder } from '@ionic/vue';
import { computed } from 'vue';
import { ContentType } from '@/data/type/helper/contentType';
import { cn } from '@/presentation/helper/style';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

export interface Props {
    id: string;
    type: AllowedTypes;
    title: string;
    subtitle: string;
    withCopy?: boolean;
    checkboxModel?: boolean;
    modifier?: ClassValue;
}

export interface Emits {
    onCheck: {
        id: string;
        type: AllowedTypes;
        isChecked: boolean;
    };
    onDelete: {
        id: string;
        type: AllowedTypes;
    };
    onCopy: {
        id: string;
    };
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: 'onCheck', { id, type, isChecked }: Emits['onCheck']): void;
    (e: 'onDelete', { id, type }: Emits['onDelete']): void;
    (e: 'onCopy', { id }: Emits['onCopy']): void;
}>();

const model: WritableComputedRef<boolean> = computed({
    get() {
        return props.checkboxModel;
    },
    set(value) {
        emit('onCheck', {
            id: props.id,
            type: props.type,
            isChecked: value,
        });
    },
});
</script>

<template>
    <div
        :class="
            cn(
                'article-edit-item v-flex v-items-center v-rounded v-border v-border-gray-20 v-bg-white v-p-box',
                modifier,
            )
        "
        lines="none"
    >
        <v-checkbox v-model="model" :value="id" modifier="v-mr-auto v-w-full">
            <span v-if="type == ContentType.SUBTITLE" class="v-font-bold">
                {{ title }}
            </span>

            <template v-else>{{ title }}</template>

            <div class="v-h5 v-font-fflight v-text-ty-helper">{{ subtitle }}</div>
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
                @click="emit('onDelete', { id, type })"
            />

            <ion-reorder slot="end" class="v-ml-box-xl v-text-ty-helper">
                <v-icon src="icon/dots.svg" data-testid="article-edit-item-reorder" />
            </ion-reorder>
        </div>
    </div>
</template>
