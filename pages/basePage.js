// import { page, Locator } from '@playwright/test';

export class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigate(url) {
        await this.page.goto(url);
    }
    async click(locator) {
        if (typeof locator === 'string') {
            await this.page.locator(locator).click();
        } 
        else {
            await locator.click();
        }
    }
    async fill(locator, text) {
        if (typeof locator === 'string') {
            await this.page.locator(locator).fill(text);
        } 
        else {
            await locator.fill(text);
        }
    }
    async getText(locator) {
        if (typeof locator === 'string') {
            return await this.page.locator(locator).innerText();
        } 
        else {
            return await locator.innerText();
        }
    }
    async waitFor(locator, options) {
        if (typeof locator === 'string') {
            await this.page.locator(locator).waitFor(options);
        } 
        else {
            await locator.waitFor(options);
        }
    }
}

