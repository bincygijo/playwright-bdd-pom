import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  async fillUserInfo(first: string, last: string, zip: string) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }
}