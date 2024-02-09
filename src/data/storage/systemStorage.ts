import type { System } from '@/data/type/app/system';
import { createStorage } from '@/data/helper/storage';

const systemStorage = createStorage<System>('system');

export async function readSystemStorage(): Promise<System | void> {
    return systemStorage.read();
}

export async function writeSystemStorage(data: System): Promise<void> {
    const system = (await readSystemStorage()) || {};

    const newSystem = {
        ...system,
        ...data,
    };

    return systemStorage.write(newSystem);
}
