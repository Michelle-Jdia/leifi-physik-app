import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('Example page is rendered', async ({ page }, testInfo) => {
    await page.goto('/dev/example', {
        waitUntil: 'networkidle',
    });

    await page.screenshot({
        fullPage: true,
        path: testInfo.outputPath('page.png'),
    });
});

test('Example page has firstName', async ({ page }, testInfo) => {
    await page.goto('/dev/example', {
        waitUntil: 'networkidle',
    });

    const firstName = await page.locator('[data-test-firstname]');

    await expect(firstName).toContainText('firstname: AAAA');

    await firstName.screenshot({
        path: testInfo.outputPath('firstName.png'),
    });
});
