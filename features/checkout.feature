Feature: Checkout Process

Scenario: Add items to cart and proceed to checkout
Given I am logged in as "standard_user" "secret_sauce"
And I add 2 items to the cart
And I open the cart
And I proceed to checkout
And I fill user info "John" "Doe" "12345"
And I place the order
Then I should see the order confirmation message

  