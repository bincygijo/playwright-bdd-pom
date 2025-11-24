import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { InventoryPage } from "../../pages/InventoryPage";
import { globals } from "../../support/globals";

When("I sort products by {string}", async function (option) {
  const inventory = new InventoryPage(globals.page);
  await inventory.sortBy(option);
});

Then("the products should be sorted by price ascending", async function () {
  const inventory = new InventoryPage(globals.page);
  const prices = await inventory.getPrices();
  expect(prices).toEqual([...prices].sort((a,b)=>a-b));
});