<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import VHeader from '@/layout/header/VHeader.vue';
</script>

<template>
    <v-header>
        <h3 class="v-py-box-md v-text-h3"><slot /></h3>

        <template #sub-title />

        <template #actions>
            <ion-button>
                <ion-icon slot="icon-only" :icon="addOutline" />
            </ion-button>
        </template>
    </v-header>
</template>
