import { Locator, Page } from "@playwright/test";

export class AddJobStagePage {
    page : Page;
    domain: String;
    Label: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.Label = page.locator('text=Job Bid Stage:');
    }

    async gotoAddJobStagePage() {
        await this.page.goto(
            `https://${this.domain}/customers/salefollowups`
          );
    }
    
}

    