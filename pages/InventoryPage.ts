import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {

  async addFirstTwoItems() {
    const addButtons = await this.page.$$('button[id^="add-to-cart"]');
    await addButtons[0].click();
    await addButtons[1].click();
  }

  async gotoCart() {
    await this.page.click('.shopping_cart_link');
  }

  async sortBy(value: string) {
    await this.page.selectOption('.product_sort_container', value);
  }

  async getPrices(): Promise<number[]> {
    const prices = await this.page.$$eval(".inventory_item_price", items =>
      items.map(i => Number(i.textContent.replace("$","")))
      );
    return prices;
  }
}