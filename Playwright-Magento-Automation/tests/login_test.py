# https://magento.softwaretestingboard.com/

def test_login(page):
    page.goto("https://magento.softwaretestingboard.com/")
    page.screenshot(path="screenshots/homepage.png")
    page.wait_for_timeout(2000)  # Delay to preview homepage
    page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    page.fill('#email','temp123456@gmail.com')
    page.fill('#pass', 'Temp@1234')
    page.click('#send2')
    page.wait_for_timeout(4000)  # Delay to preview login form

    