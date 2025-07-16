const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('I am on the SauceDemo login page',{ timeout: 20000 }, async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I login with username {string} and password {string}',{ timeout: 20000 }, async function (username, password) {
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('input[data-test="login-button"]');
  await page.waitForTimeout(2000);
});

When('I add products to the cart',{ timeout: 20000 }, async function () {
  const products = [
    '#add-to-cart-sauce-labs-fleece-jacket',
    '#add-to-cart-sauce-labs-backpack',
    '#add-to-cart-sauce-labs-onesie',
    '#add-to-cart-sauce-labs-bolt-t-shirt'
  ];
  for (const product of products) {
    await page.click(product);
  }
  await page.waitForTimeout(2000);
  await page.click('.shopping_cart_link');
  await page.waitForTimeout(2000);
});

When('I checkout with first name {string}, last name {string}, and postal code {string}',{ timeout: 20000 }, async function (first, last, postal) {
  await page.click('#checkout');
  await page.waitForTimeout(2000);
  await page.fill('#first-name', first);
  await page.fill('#last-name', last);
  await page.fill('#postal-code', postal);
  await page.waitForTimeout(2000);
  await page.click('#continue');
  await page.waitForTimeout(2000);
});

Then('the order should be successfully placed and I should be redirected',{ timeout: 20000 }, async function () {
  if (page.url() !== 'https://www.saucedemo.com/checkout-step-two.html') {
    throw new Error('Not redirected to review page');
  }

  await page.screenshot({ path: 'screenshots/order_review.png' });
  await page.click('#finish');
  await page.waitForTimeout(2000);
  await page.click('#back-to-products');
  await page.waitForTimeout(2000);
});

Then('I logout from the app',{ timeout: 20000 }, async function () {
  await page.click('#react-burger-menu-btn');
  await page.waitForSelector('#logout_sidebar_link');
  await page.click('#logout_sidebar_link');
  await browser.close();
});
