import { Page } from "@playwright/test";

export class Login {
  page: Page;
  domain: string;
  constructor(page: Page, domain: string) {
    this.page = page;
    this.domain = domain;
  }

  /**
   * Sign in the web
   * @param username
   * @param password
   */
  async with(username: string, password: string) {
    await this.page.goto(`https://${this.domain}/sign-in`);
    await this.page.fill(`//input[@name='username']`, username);
    await this.page.fill(`//input[@name='password']`, password);
    await this.page.click(`//span[contains(text(),'Sign in now')]`);
    await this.page.waitForNavigation({ waitUntil: "load" });
  }
}
