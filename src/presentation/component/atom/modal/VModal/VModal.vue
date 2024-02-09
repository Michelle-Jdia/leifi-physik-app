<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { Ref } from 'vue';
import {
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';
import { cn } from '@/presentation/helper/style';

interface Props {
    withSave?: boolean;
    modifier?: ClassValue;
}

defineProps<Props>();

const emit = defineEmits<{
    (e: 'onCancel'): void;
    (e: 'onConfirm'): void;
    (e: 'onDismiss'): void;
}>();

const modal: Ref<InstanceType<typeof IonModal> | null> = ref(null);

function confirm() {
    if (!modal.value) {
        return;
    }

    modal.value.$el.dismiss();
    emit('onConfirm');
}

function cancel() {
    if (!modal.value) {
        return;
    }

    modal.value.$el.dismiss();
    emit('onCancel');
}

function dismiss() {
    emit('onDismiss');
}
</script>

<template>
    <ion-modal
        ref="modal"
        :class="cn('modal v-text-ty-headline', modifier)"
        @will-dismiss="dismiss"
    >
        <ion-page>
            <ion-header>
                <ion-toolbar class="!v-px-box-md">
                    <ion-buttons slot="start">
                        <button class="v-underline" size="none" @click="cancel">Schließen</button>
                    </ion-buttons>

                    <ion-title>
                        <h4 class="v-h4 v-text-center v-font-bold">
                            <slot name="title" />
                        </h4>
                    </ion-title>

                    <ion-buttons v-if="withSave" slot="end">
                        <button class="v-underline" size="none" @click="confirm">Speichern</button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>

            <ion-content :scroll-y="true">
                <div class="v-p-box-xl">
                    <slot />
                </div>
            </ion-content>

            <ion-footer>
                <slot name="footer" />
            </ion-footer>
        </ion-page>
    </ion-modal>
</template>
