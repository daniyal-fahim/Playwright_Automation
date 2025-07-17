Feature: Grinding the Parabank

Scenario:Login ,signup and traversing through the website   
    Given I am on the Sauce Demo login page
    When I enter valid username "standard_user" and password "secret_sauce"
    Then I should be logged in successfully