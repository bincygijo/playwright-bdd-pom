Feature: Login Functionality

  Scenario: Valid Login with Standard User
    Given I navigate to the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to inventory page