import { Page } from "@playwright/test";

export class BidsToDo {
  page: Page;
  domain: String;
  constructor(page: Page, domain: String) {
    this.page = page;
    this.domain = domain;
  }

  async gotoBidsToDo() {
    await this.page.goto(`https://${this.domain}/customers/bidtodo`);
    await this.page.waitForLoadState();
  }
}
