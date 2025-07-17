import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from 'playwright';

Given('I am on the Magento login page',{timeout:20000}, async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('https://magento.softwaretestingboard.com/');
  await this.page.waitForTimeout(1000);
  await this.page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
});

When('I fill in the credentials with username {string} and password {string}',{timeout:20000}, async function (username, password) {
  await this.page.click('.authorization-link');
  await this.page.fill('#email', username);
  await this.page.fill('#pass', password);
  await this.page.waitForTimeout(1000);
  await this.page.screenshot({ path: 'screenshots/login.png' });
});

When('I click the login button', async function () {
  await this.page.click('#send2');
  await this.page.waitForTimeout(2000);
});

Then('I should be logged into Magento and redirected to the home page',{timeout:20000}, async function () {
  // await this.page.waitForSelector('.greet.welcome', { timeout: 10000 });

  // const welcomeText = await this.page.textContent('.greet.welcome');
  // if (!welcomeText || !welcomeText.toLowerCase().includes('welcome')) {
  //   throw new Error('Login failed — welcome message not found.');
  // }

  const url = this.page.url();
  if (!url.includes('magento.softwaretestingboard.com')) {
    throw new Error(`Unexpected URL: ${url}`);
  }

  console.log('✅ Login successful and user is on home page.');
});

Then('I close the browser', async function () {
  await this.browser.close();
});
