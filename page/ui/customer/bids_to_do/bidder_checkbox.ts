import { Locator, Page } from "@playwright/test";

export class BidderCheckboxStatus {
    page : Page;
    domain: String;
    oneEmployee: Locator;
    scheduleTab: Locator;
    bidderCheckbox: Locator;
    attachmentsTab: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain; 
        this.oneEmployee = page.locator("text=a, a");
        this.scheduleTab = page.locator('button[role="tab"]:has-text("Schedule")');
        this.bidderCheckbox = page.locator('input[name="Bidder"]');
        this.attachmentsTab = page.locator('button[role="tab"]:has-text("Attachments")');

    }

    async gotoBidderCheckboxStatus() {
        await this.page.goto(
            `https://${this.domain}/employees`
          );
    }
    
}

    