import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { HomePage } from '../pages/homePage';

test.describe('Home Page Tests', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate('https://candymapper.com/');
    });

    test('should have the correct title', async () => {
        await expect(homePage.page).toHaveTitle(/CandyMapper.Com/);
    });

    test('should fill out contact form', async () => {
        await homePage.page.getByRole('textbox', { name: 'Last Name' }).fill('Foo');
        await homePage.page.getByRole('textbox', { name: 'Email*' }).fill('foo@bar.com');
        await homePage.page.getByRole('textbox', { name: 'Phone Number' }).fill('543.213.4567');
        await homePage.page.getByRole('textbox', { name: 'Message' }).fill('I am a pretty teapot.');
        await expect(homePage.page.getByText('Thank you for your inquiry!')).toBeVisible();
    });

})
