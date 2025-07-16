Feature: Login to the Magento system

  Scenario: Successful login
    Given I am on the Magento login page
    When I fill in the credentials with username "temp123456@gmail.com" and password "Temp@1234"
    And I click the login button
    Then I should be logged into Magento and redirected to the home page
    And I close the browser
