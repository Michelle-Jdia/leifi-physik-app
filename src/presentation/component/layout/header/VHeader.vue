<script setup lang="ts">
import { IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/vue';
</script>

<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button />
            </ion-buttons>

            <div class="v-ml-box">
                <h4 v-if="$slots['pre-title']" class="v-text-copy-xs v-text-ty-helper">
                    <slot name="pre-title" />
                </h4>

                <h1 v-if="$slots.default" class="v-text-h3">
                    <slot />
                </h1>

                <h4 v-if="$slots['sub-title']" class="v-text-copy-xs v-text-ty-helper">
                    <slot name="sub-title" />
                </h4>
            </div>

            <ion-buttons slot="end">
                <slot name="actions" />
            </ion-buttons>

            <div v-if="$slots.after" class="v-mx-box">
                <slot name="after" />
            </div>
        </ion-toolbar>
    </ion-header>
</template>
