import { expect, test } from '@playwright/test';

test('Branches page is rendered', async ({ page }, testInfo) => {
    await page.goto('/branches', {
        waitUntil: 'networkidle',
    });

    await page.screenshot({
        fullPage: true,
        path: testInfo.outputPath('page.png'),
    });
});

test('Branches page has correct title', async ({ page }) => {
    await page.goto('/branches');

    const title = await page.getByText('Teilgebiete der Physik');

    await expect(title).toBeVisible();
});
