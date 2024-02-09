<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef, Ref } from 'vue';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
import { computed, ref } from 'vue';
import { SolvedEnumId } from '@/data/type/api/solvedApi';
import { useMultiSolved } from '@/store/solvedStore';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

export interface Props {
    learnStatus: SolvedEnumId | string;
    modifier?: ClassValue;
}

const emit = defineEmits<{
    (e: 'onSelect', learnStatusId: SolvedEnumId | string): void;
}>();

const props = withDefaults(defineProps<Props>(), {
    learnStatus: SolvedEnumId.NOT_LEARNED,
});

const model: Ref<SolvedEnumId | string> = ref(props.learnStatus);
const { data: solved, getData: getMultiSolved } = useMultiSolved();

const style: ComputedRef<string> = computed(() => {
    if (model.value === SolvedEnumId.LEARNED) {
        return 'v-bg-green-50';
    }

    if (model.value === SolvedEnumId.REPEAT) {
        return 'v-bg-yellow-50';
    }

    if (model.value === SolvedEnumId.NOT_LEARNED) {
        return 'v-bg-pink-50';
    }

    return 'v-bg-gray-50';
});

const selectStyle = `--padding-top: 0; --padding-bottom: 0; --padding-end: 0; --placeholder-color: var(--ty-headline); --placeholder-opacity: 1;`;
const itemStyle = `--background: transparent; --inner-padding-end: 0`;

getMultiSolved();
</script>

<template>
    <ion-list
        :class="cn('learn-status-popover v-inline-block v-w-max v-rounded v-p-0', modifier, style)"
    >
        <ion-item v-if="solved" :style="itemStyle" lines="none">
            <v-icon size="xs" src="/icon/edit.svg" class="v-pl-box-xs" />

            <ion-select
                v-model="model"
                mode="ios"
                class="v-p-box-xs v-text-copy-xs v-font-bold v-text-ty-headline md:v-text-copy"
                :style="selectStyle"
                interface="popover"
                placeholder="Select"
                @ion-change="emit('onSelect', model)"
            >
                <ion-select-option v-for="item in solved" :key="item.id" :value="item.id">
                    {{ item.name }}
                </ion-select-option>
            </ion-select>
        </ion-item>
    </ion-list>
</template>

<style scoped lang="scss">
ion-select::part(icon) {
    display: none;
}
</style>
