import { CapacitorConfig } from '@capacitor/cli';
// @todo use env vars
// import { loadEnv } from 'vite';
// const env = loadEnv('', process.cwd(), '');

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'leifiphysik-app',
    webDir: 'dist',
    // @todo check if we need this
    // bundledWebRuntime: false,
    server: {
        androidScheme: 'https',
    },
};

export default config;
