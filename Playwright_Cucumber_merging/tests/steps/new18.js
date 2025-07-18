import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';

Given('I am on the YouTube homepage', { timeout: 2000000 }, async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.page.goto('https://www.youtube.com/');
});

When('I search for {string}', { timeout: 2000000 }, async function (searchTerm) {
    await this.page.fill('input[name="search_query"]', searchTerm);
    await this.page.getByRole('button', { name: 'Search' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: 'search_results.png' });

});

When('I click on the 2nd video', { timeout: 2000000 }, async function () {
    const videos = await this.page.$$('ytd-video-renderer');
    if (videos.length > 1) {
        await videos[1].click();
    } else {
        throw new Error('Less than 2 videos found');
    }
});

When('I like the opened video', { timeout: 2000000 }, async function () {
    await this.page.waitForSelector('ytd-toggle-button-renderer.style-text');
    const likeButtons = await this.page.$$('ytd-toggle-button-renderer.style-text');
    if (likeButton) {
        await likeButton.click();
    } else {
        throw new Error('Like button not found');
    }
});

Then('I take a screenshot of the video', { timeout: 200000 }, async function () {
    await this.page.screenshot({ path: 'video_screenshot.png' });
    await this.browser.close();
});