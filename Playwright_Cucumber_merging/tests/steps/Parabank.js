import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from 'playwright';

Given('I am at home page', { timeout: 20000 }, async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await this.page.waitForLoadState('domcontentloaded');
});

When('I enter my username {string} and password {string}', { timeout: 20000 }, async function (username, password) {
  // Escaping the dot in id selectors
  await this.page.fill('#customer\\.username', username);
  await this.page.fill('#customer\\.password', password);
  await this.page.screenshot({ path: 'screenshots/parabank_login.png' });
});

Then('I will login in to the system', { timeout: 20000 }, async function () {
  await this.page.click('input[type="submit"]');
  await this.page.waitForLoadState('networkidle');

  // Simple login success check
  const logoutVisible = await this.page.isVisible('a[href="/parabank/logout.htm"]');
  if (!logoutVisible) {
    throw new Error('Login failed or redirected to incorrect page.');
  }
});
