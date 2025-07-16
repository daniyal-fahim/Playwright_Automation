# https://magento.softwaretestingboard.com/

def test_logout(page):
    page.goto("https://magento.softwaretestingboard.com/")
    page.screenshot(path="screenshots/homepage.png")
    page.wait_for_timeout(2000)  # Delay to preview homepage
    page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    page.fill('#email','temp123456@gmail.com')
    page.fill('#pass', 'Temp@1234')
    page.click('#send2')
    page.wait_for_timeout(4000)  # Delay to preview login form
    page.screenshot(path="screenshots/login.png")
    
    page.goto("https://magento.softwaretestingboard.com/push-it-messenger-bag.html")

    page.wait_for_timeout(2000)  # Delay to preview product image
    page.click('#product-addtocart-button')
    page.screenshot(path="screenshots/ItemSelected.png")
    page.click('.action.showcart')
    page.wait_for_timeout(2000)  # Delay to preview cart
    page.screenshot(path="screenshots/Cart.png")
    

    page.click(".action.switch")
    page.wait_for_selector('.authorization-link')
    page.click('.authorization-link')
    page.wait_for_timeout(2000)  # Delay to preview account switch
    