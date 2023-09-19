<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { appsOutline, copyOutline, timeOutline } from 'ionicons/icons';
import VHeader from '@/layout/header/VHeader.vue';
</script>

<template>
    <v-header>
        <slot />

        <template #sub-title>
            <slot name="sub-title" />
        </template>

        <template #actions>
            <ion-button>
                <ion-icon slot="icon-only" :icon="timeOutline" />
            </ion-button>

            <ion-button>
                <ion-icon slot="icon-only" :icon="appsOutline" />
            </ion-button>

            <ion-button>
                <ion-icon slot="icon-only" :icon="copyOutline" />
            </ion-button>
        </template>
    </v-header>
</template>
