import { Locator, Page } from "@playwright/test";

export class OpenManageEmployees {
    page : Page;
    nodata : Locator;
    domain: String;
    employessSubMenu: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.employessSubMenu = page.locator('button:has-text("Employees")');

    }

    async gotoOpenManageEmployees() {
        await this.page.goto(
            `https://${this.domain}/dashboard`
          );
    }
   
}

    