def test_formfilling(page):
    # Login first
    page.goto("https://www.saucedemo.com/")
    page.fill('#user-name', 'standard_user')  # Using id="user-name"
    page.fill('#password', 'secret_sauce')    # Using id="password"
    page.click('input[data-test="login-button"]')  # Login button still uses data-test

    page.wait_for_timeout(2000)  # Delay to preview login

    assert page.is_visible('div.inventory_list')

    