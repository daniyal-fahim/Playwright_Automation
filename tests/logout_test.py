
def test_logout(page):
    # Login first
    page.goto("https://www.saucedemo.com/")
    page.fill('input[data-test="username"]', 'standard_user')
    page.fill('input[data-test="password"]', 'secret_sauce')
    page.click('input[data-test="login-button"]')
    page.wait_for_timeout(2000)  # Delay to preview login

    # Open menu and click logout
    page.click('button[id="react-burger-menu-btn"]')
    page.wait_for_selector('#logout_sidebar_link')
    page.click('#logout_sidebar_link')
    page.wait_for_timeout(2000)  # Delay to preview logout

    # Verify we're back on login page
    assert "saucedemo.com" in page.url
    assert page.is_visible('input[data-test="username"]')