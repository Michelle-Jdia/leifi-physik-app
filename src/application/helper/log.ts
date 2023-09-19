import { isDev } from '@/env/app';

export function devLog(...args: any) {
    // eslint-disable-next-line no-console
    isDev && console.log(...args);
}
