import { Locator, Page } from "@playwright/test";

export class AddEmployeesColorPage {
    page : Page;
    nodata : Locator;
    domain: String;
    addBtn: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.addBtn = page.locator( "//a/button");

    }

    async gotoAddEmployeesColorPage() {
        await this.page.goto(
            `https://${this.domain}/employees`
          );
    }
   
}

    