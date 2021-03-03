# new feature
# Tags: optional

Feature: A description

  Scenario Outline: End to End
    Given I am a new hotel customer with "<email>"
    When Set request body
    And Send Post HTTP request
    And Able to view added customer
    And Able to delete added customer
    And Able to view valid HTTP response code


    Examples:
      | email             |
      | priya@mail.net    |
      | priya1qwq@mail.com |


  Scenario: Add User
    Given I am a new hotel customer
    When Set request body
    And Send Post HTTP request
    Then Able to view valid HTTP response code

  Scenario: Get User
    Given I am a existing hotel customer
    When execute via restAssured for view user
    Then Able to view valid HTTP response code

  Scenario: Delete User
    Given I am a existing hotel customer
    When execute via restAssured for delete user
    Then Able to view valid HTTP response code