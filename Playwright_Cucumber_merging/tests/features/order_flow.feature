Feature: Complete order flow on SauceDemo

  Scenario: Login, add items to cart, fill form, complete order
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    And I add products to the cart
    And I checkout with first name "Dan", last name "Ven", and postal code "564321"
    Then the order should be successfully placed and I should be redirected
    And I logout from the app
