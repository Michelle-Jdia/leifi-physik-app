import { devLog } from '@/application/helper/log';

const intervalDelay = 50;
let retryTimeInMS = 0.5 * 1000;

export function resizeBrowser() {
    const intervalId = setInterval(() => {
        retryTimeInMS -= intervalDelay;

        if (retryTimeInMS <= 0) {
            clearInterval(intervalId);
        }

        const animationContainer = document.querySelector('.LEIFI_animation');

        if (!animationContainer) {
            return;
        }

        window.dispatchEvent(new Event('resize'));

        devLog('Browser resizing...');

        clearInterval(intervalId);
    }, intervalDelay);
}
