
def test_add_to_cart(page):
    # Login first
    page.goto("https://www.saucedemo.com/")
    page.fill('input[data-test="username"]', 'standard_user')
    page.fill('input[data-test="password"]', 'secret_sauce')
    page.click('input[data-test="login-button"]')
    page.wait_for_timeout(2000)  # Delay to preview login
    # Add first item to cart
    page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]')
    page.wait_for_timeout(2000)  # Delay to preview login

    # Click on cart icon
    page.click('.shopping_cart_link')
    page.wait_for_timeout(2000)  # Delay to preview login

    # Assert that cart page shows the added item
    assert page.is_visible('div.inventory_item_name')