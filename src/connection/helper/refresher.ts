import type { RefresherCustomEvent } from '@ionic/vue';

interface RefresherInput {
    event: RefresherCustomEvent;
    callback: () => Promise<void>;
    timeout?: number;
}

export async function createRefresherHandler(refresherInput: RefresherInput): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(async () => {
            await refresherInput.callback();
            refresherInput.event.detail.complete();
            resolve(true);
        }, refresherInput.timeout || 500);
    });
}
