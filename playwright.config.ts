import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

const serverTimeout = 3 * 1000;
const testTimeout = 60 * 1000;
const outputDir = './src/test-result/e2e';

export default defineConfig({
    webServer: {
        command: 'npm run dev',
        url: process.env.BASE_URL,
        timeout: serverTimeout,
        reuseExistingServer: true,
    },
    timeout: testTimeout,
    testDir: './src/test/e2e',
    outputDir: `${outputDir}/asset`,
    fullyParallel: true,
    forbidOnly: false,
    retries: 0,
    workers: 2,
    reporter: [
        ['list'],
        [
            'html',
            {
                outputFolder: `${outputDir}/report`,
            },
        ],
    ],
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        video: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        // {
        //     name: 'firefox',
        //     use: {
        //         ...devices['Desktop Firefox'],
        //     },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //     name: 'Google Chrome',
        //     use: {
        //         ...devices['Desktop Chrome'],
        //         channel: 'chrome',
        //     },
        // },
    ],
});
