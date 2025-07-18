Feature: Exploring YouTube Automation Skills

  Scenario: Searching, clicking, and liking a YouTube video
    Given I am on the YouTube homepage
    When I search for "MR BEAST"
    And I click on the 2nd video
    And I like the opened video
    Then I take a screenshot of the video
