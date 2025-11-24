import { BasePage } from "./BasePage";

export class CompletePage extends BasePage {
  async confirmationMessage() {
    return await this.page.textContent('.complete-header');
  }
}