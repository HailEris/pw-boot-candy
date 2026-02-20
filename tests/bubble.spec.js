import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://candymapper.com//');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CandyMapper.Com/);
});

test('clear popup', async ({ page }) => {
  await page.goto('https://candymapper.com//');

  await expect(page.locator('#popup-widget183-cta')).toBeVisible();

  await page. locator('#popup-widget183-close-icon > path').click();

  await expect(page.locator('#popup-widget183-cta')).not.toBeVisible();
});
