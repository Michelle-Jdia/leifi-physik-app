<script setup lang="ts">
import VHeader from '@/layout/header/VHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import { IonButton, alertController } from '@ionic/vue';
import { useDeleteDatabase } from '@/store/deleteDatabaseStore';

const presentAlert = async () => {
    const alert = await alertController.create({
        header: 'Vorsicht!',
        message: 'Wenn Sie auf OK klicken, wird der Speicher gelöscht!',
        buttons: [
            {
                text: 'Abbrechen',
                role: 'cancel',
                handler: () => {
                    // @ts-ignore
                    // eslint-disable-next-line no-console
                    console.log('cancelled');
                },
            },
            {
                text: 'OK',
                role: 'confirm',
                handler: () => {
                    useDeleteDatabase();
                },
            },
        ],
    });

    await alert.present();
};
</script>

<template>
    <v-page>
        <template #header>
            <v-header>Lokale Daten</v-header>
        </template>

        <ion-button @click="presentAlert">Speicher löschen</ion-button>
    </v-page>
</template>
