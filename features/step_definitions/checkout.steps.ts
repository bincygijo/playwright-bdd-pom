import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { CompletePage } from "../../pages/CompletePage";
import { globals } from "../../support/globals";

Given("I am logged in as {string} {string}", async function (user, pass) {
  const login = new LoginPage(globals.page);
  await login.navigate();
  await login.login(user, pass);
});

When("I add 2 items to the cart", async function () {
  const inventory = new InventoryPage(globals.page);
  await inventory.addFirstTwoItems();
});

When("I open the cart", async function () {
  const inventory = new InventoryPage(globals.page);
  await inventory.gotoCart();
});

When("I proceed to checkout", async function () {
  const cart = new CartPage(globals.page);
  await cart.checkout();
});

When(
  "I fill user info {string} {string} {string}",
  async function (f, l, z) {
    const checkout = new CheckoutPage(globals.page);
    await checkout.fillUserInfo(f, l, z);
  }
);

When("I place the order", async function () {
  const checkout = new CheckoutPage(globals.page);
  await checkout.finish();
});

Then("I should see the order confirmation message", async function () {
  const complete = new CompletePage(globals.page);
  const msg = await complete.confirmationMessage();
  expect(msg).toContain("Thank you for your order");
});
