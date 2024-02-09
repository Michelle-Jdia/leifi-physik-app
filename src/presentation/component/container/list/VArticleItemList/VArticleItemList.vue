<script setup lang="ts">
import type {
    Emits as VArticleEditItemEmits,
    Props as VArticleEditItemProps,
} from '@/molecule/item/VArticleEditItem/VArticleEditItem.vue';
import type { AllowedTypes } from '@/presentation/type/favorite';
import type { ClassValue } from 'clsx';
import type { ComputedRef, Ref } from 'vue';
import { IonReorderGroup } from '@ionic/vue';
import { computed, ref } from 'vue';
import VFavoriteWrapper from '@/container/wrapper/VFavoriteWrapper/VFavoriteWrapper.vue';
import VArticleEditItem from '@/molecule/item/VArticleEditItem/VArticleEditItem.vue';

type CheckedItem = VArticleEditItemEmits['onCheck'];

export interface Reorder {
    from: number;
    to: number;
    items: VArticleEditItemProps[];
}

interface Input {
    id: string;
    type: AllowedTypes;
    [key: string]: any;
}

export interface Emits {
    onReorder: Reorder;
    onCheck: Record<'items', CheckedItem[]>;
    onDelete: Input;
}

interface Props {
    items: Input[];
    modifier?: ClassValue;
}

const props = defineProps<Props>();
const itemsCopy: Ref<Input[]> = ref(props.items);
const checkedItems: Ref<VArticleEditItemEmits['onCheck'][]> = ref([]);

const emit = defineEmits<{
    (e: 'onReorder', { from, to, items }: Emits['onReorder']): void;
    (e: 'onCheck', { items }: Emits['onCheck']): void;
    (e: 'onDelete', favorite: Emits['onDelete']): void;
}>();

const checkedItemsList: ComputedRef<CheckedItem[]> = computed(() => {
    return checkedItems.value.filter((item) => item);
});

function findCheckedItemByIdAndType(id: string, type: AllowedTypes) {
    return checkedItems.value.find((item) => {
        return item.id === id && item.type === type;
    });
}

function findItemByIdAndType(id: string, type: AllowedTypes) {
    return itemsCopy.value.find((item) => {
        return item.id === id && item.type === type;
    });
}

const checkedItemsLength: ComputedRef<number> = computed(() => {
    return checkedItemsList.value.length;
});

function handleReorder(event: CustomEvent) {
    const items = event.detail.complete(itemsCopy.value);

    itemsCopy.value = items;

    emit('onReorder', {
        from: event.detail.from,
        to: event.detail.to,
        items,
    });
}

function handleCheck({ id, type, isChecked }: VArticleEditItemEmits['onCheck']) {
    const item = findItemByIdAndType(id, type);

    if (!item) {
        return;
    }

    if (isChecked) {
        item.isChecked = true;

        if (!findCheckedItemByIdAndType(id, type)) {
            checkedItems.value = [
                ...checkedItems.value,
                {
                    id: id,
                    type: type,
                    isChecked: isChecked,
                },
            ];
        }

        return;
    }

    item.isChecked = false;

    checkedItems.value = checkedItems.value.filter(
        (item) => !(item.id === id && item.type === type),
    );
}

function updateCheckedItems({ id, type, isChecked }: VArticleEditItemEmits['onCheck']) {
    handleCheck({
        id,
        type,
        isChecked,
    });

    emit('onCheck', {
        items: checkedItemsList.value,
    });
}

function handleDeleteFavorite(favorite: Input) {
    emit('onDelete', favorite);
}

function unCheckAllItems() {
    itemsCopy.value.forEach((item) => {
        handleCheck({
            id: item.id,
            type: item.type,
            isChecked: false,
        });
    });
}

function checkAllItems() {
    itemsCopy.value.forEach((item) => {
        handleCheck({
            id: item.id,
            type: item.type,
            isChecked: true,
        });
    });
}
</script>

<template>
    <div class="v-flex v-justify-between v-p-box v-text-ty-headline v-underline">
        <div v-if="itemsCopy.length" @click="checkAllItems">Alle auswählen</div>

        <div v-if="checkedItemsLength" @click="unCheckAllItems">
            {{ checkedItemsLength }} Artikel abwählen
        </div>
    </div>

    <ion-reorder-group :disabled="false" @ion-item-reorder="handleReorder($event)">
        <v-favorite-wrapper
            v-for="item in itemsCopy"
            :id="item.id"
            :key="item.id"
            :type="item.type"
        >
            <template #default="{ title, subtitle }">
                <v-article-edit-item
                    :id="item.id"
                    :checkbox-model="item.isChecked"
                    :type="item.type"
                    :title="title"
                    :subtitle="subtitle"
                    modifier="v-mt-box"
                    @on-check="updateCheckedItems"
                    @on-delete="handleDeleteFavorite"
                />
            </template>
        </v-favorite-wrapper>
    </ion-reorder-group>
</template>
