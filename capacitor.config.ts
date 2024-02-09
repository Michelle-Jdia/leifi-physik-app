import type { CapacitorConfig } from '@capacitor/cli';

// @todo use env vars
// import { loadEnv } from 'vite';
// const env = loadEnv('', process.cwd(), '');

const config: CapacitorConfig = {
    appId: 'de.leifiphysik.app',
    appName: 'LEIFIphysik',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
    },
    plugins: {
        LiveUpdates: {
            appId: 'fed41bbf',
            autoUpdateMethod: 'background',
            channel: 'Develop',
        },
        SplashScreen: {
            launchShowDuration: 15000,
            launchAutoHide: true,
            splashImmersive: true,
            backgroundColor: '#000000',
            showSpinner: true,
        },
        CapacitorHttp: {
            enabled: true,
        },
    },
};

export default config;
