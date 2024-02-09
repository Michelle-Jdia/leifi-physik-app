import { toastController } from '@ionic/vue';
import { checkmark } from 'ionicons/icons';
import { $t } from '@/application/translation';

interface ToastConfig {
    duration?: number;
    position?: 'top' | 'bottom' | 'middle';
    color?: 'success' | 'warning' | 'danger';
    icon?: string;
    buttonText?: string;
    cancelHandler?: () => void;
}

export async function createToast(message: string, options: ToastConfig = {}): Promise<void> {
    const {
        duration = 3000,
        position = 'top',
        color = 'success',
        icon = checkmark,
        buttonText = $t.close,
        cancelHandler,
    } = options;

    const toast = await toastController.create({
        message,
        duration,
        position,
        cssClass: 'toast',
        color,
        icon,
        buttons: [
            {
                text: buttonText,
                role: 'cancel',
                handler: cancelHandler,
            },
        ],
    });

    return toast.present();
}
