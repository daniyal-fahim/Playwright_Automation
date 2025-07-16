def test_formfilling(page):
    # Login first
    page.goto("https://www.saucedemo.com/")
    page.fill('#user-name', 'standard_user')  # Using id="user-name"
    page.fill('#password', 'secret_sauce')    # Using id="password"
    page.click('input[data-test="login-button"]')  # Login button still uses data-test

    page.wait_for_timeout(2000)  # Delay to preview login

    page.click('#add-to-cart-sauce-labs-fleece-jacket')
    page.click('#add-to-cart-sauce-labs-backpack')
    page.click('#add-to-cart-sauce-labs-onesie')
    page.click('#add-to-cart-sauce-labs-bolt-t-shirt')

    page.wait_for_timeout(2000)  # Delay to preview login
    page.click('.shopping_cart_link')  # Fixed selector with underscore
    page.wait_for_timeout(2000)  # Delay to preview login

    page.click('#checkout')  # Fixed selector with underscore
    page.wait_for_timeout(2000)  # Delay to preview checkout
    page.fill('#first-name', 'Dan')  # Using id="first-name"
    page.fill('#last-name', 'Ven')    # Using id="last-name"
    page.fill('#postal-code', '564321')  # Using id="postal-code"
    page.wait_for_timeout(2000)  # Delay to preview form filling
    page.click('#continue')  # Using id="continue"

    page.wait_for_timeout(2000)  # Delay to preview order review
    assert page.url == "https://www.saucedemo.com/checkout-step-two.html"
    page.screenshot(path="screenshots/order_review.png")
    page.click('#finish')  # Using id="finish"
    page.wait_for_timeout(2000)  # Delay to preview form filling
    page.click('#back-to-products')
    page.wait_for_timeout(2000)  # Delay to preview back to products


    page.click('#react-burger-menu-btn')  # Open menu
    page.wait_for_selector('#logout_sidebar_link')  # Wait for logout link to be visible
    page.click('#logout_sidebar_link')  # Click logout link