import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';

Given('I am on the Sauce Demo login page', { timeout: 20000 }, async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('https://www.saucedemo.com');
  await this.page.waitForLoadState('domcontentloaded');
});

When('I enter valid username {string} and password {string}', { timeout: 20000 }, async function (username, password) {
  await this.page.fill('#user-name', username);
  await this.page.fill('#password', password);
  await this.page.screenshot({ path: 'screenshots/saucedemo_login.png' });
});

Then('I should be logged in successfully', { timeout: 20000 }, async function () {
  await this.page.click('#login-button');
  await this.page.waitForLoadState('networkidle');

  const productHeader = await this.page.locator('.title');
  const isVisible = await productHeader.isVisible();
  if (!isVisible) {
    throw new Error('Login failed – Dashboard not visible');
  }
});
