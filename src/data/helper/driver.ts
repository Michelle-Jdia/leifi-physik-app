import { Drivers, Storage } from '@ionic/storage';
import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const storageDriver: Storage = new Storage({
    driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage],
});

storageDriver.defineDriver(CordovaSQLiteDriver);
storageDriver.create();

export const storage: Storage = storageDriver;
