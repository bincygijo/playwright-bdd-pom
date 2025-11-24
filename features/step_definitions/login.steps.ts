import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { globals } from "../../support/globals";

Given("I navigate to the login page", async function () {
  const page = globals.page;
  const login = new LoginPage(page);
  await login.navigate();
});

When("I login with username {string} and password {string}", async function (user, pass) {
  const login = new LoginPage(globals.page);
  await login.login(user, pass);
});

Then("I should be redirected to inventory page", async function () {
  await expect(globals.page).toHaveURL(/.*inventory/);
});