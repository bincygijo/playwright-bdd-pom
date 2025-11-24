import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { globals } from "./globals";

Before(async () => {
  globals.browser = await chromium.launch({ headless: true });
  globals.context = await globals.browser.newContext();
  globals.page = await globals.context.newPage();
});

After(async () => {
  await globals.browser.close();
});