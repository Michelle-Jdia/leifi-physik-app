import type { IonModal } from '@ionic/vue';

export function openModal(modal: InstanceType<typeof IonModal> | null | void): void {
    modal?.$el.present();
}

export function closeModal(modal: InstanceType<typeof IonModal> | null | void): void {
    modal?.$el.dismiss();
}
