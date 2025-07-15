
def test_login(page):
    page.goto("https://www.saucedemo.com/")

    page.fill('input[data-test="username"]', "standard_user")
    page.fill('input[data-test="password"]', "secret_sauce")
    page.click('input[data-test="login-button"]')
    page.wait_for_timeout(2000)  # Delay to preview login
    assert page.url == "https://www.saucedemo.com/inventory.html"