<script setup lang="ts">
import { alertController, onIonViewWillEnter } from '@ionic/vue';
import { ref } from 'vue';
import { devLog } from '@/application/helper/log';
import { $t } from '@/application/translation';
import { createToast } from '@/connection/helper/toast';
import { useBranchState } from '@/state/branchState';
import { deleteAllStorage, getDatabaseUsage } from '@/store/deleteDatabaseStore';
import VHeader from '@/layout/header/VHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VButton from '@/atom/button/VButton/VButton.vue';

const presentAlert = async () => {
    const alert = await alertController.create({
        header: 'Vorsicht!',
        message:
            'Wenn Sie auf OK klicken, werden alle lokalen Daten (Sammlungen, Favoriten etc.) gelöscht!',
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
                handler: handleConfirmation,
            },
        ],
    });

    await alert.present();
};

const branchState = useBranchState();

async function handleConfirmation() {
    try {
        await deleteAllStorage();
        branchState.getLiveTopicsAndBranches();

        createToast($t.settings.deleteAllStorageSuccess);
    } catch (error) {
        devLog('Error during confirmation:', error);
    }
}

const databaseUsage = ref();

onIonViewWillEnter(async () => {
    databaseUsage.value = await getDatabaseUsage();
});
</script>

<template>
    <v-page>
        <template #header>
            <v-header>Lokale Daten</v-header>
        </template>

        <section>
            <p class="v-p v-font-bold">Speichernutzung der App:</p>

            <p v-if="databaseUsage" class="v-p v-mt-box-lg">
                Datenbankgröße: {{ databaseUsage }} MB interner Speicher belegt.
            </p>

            <p class="v-p v-mt-box-lg">
                Du kannst den Speicher freigeben indem Du unter aus "Speicher löschen" klickst.
                Bitte beachte aber, dass alle lokalen Daten (Sammlungen, Favoriten etc.) damit
                verloren gehen.
            </p>

            <v-button size="small" modifier="v-mt-box-xl" @click="presentAlert"
                >Speicher löschen</v-button
            >
        </section>
    </v-page>
</template>
