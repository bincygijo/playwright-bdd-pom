Feature: Sort inventory items

Scenario: Sort items by price low to high
Given I am logged in as "standard_user" "secret_sauce"
When I sort products by "lohi"
Then the products should be sorted by price ascending
