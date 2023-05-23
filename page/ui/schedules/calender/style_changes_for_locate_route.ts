import { Locator, Page } from "@playwright/test";

export class StyleChangeColour {
    page : Page;
    domain: String;
    oneRange: Locator;
    LocaterIcon: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.oneRange = page.locator('//span[contains(text(),"Distance (miles)")]/following-sibling::div');
        this.LocaterIcon = page.locator('//div[contains(text(),"Jobs")]/following-sibling::div/descendant::a');
      }

    async gotoStyleChangeColour() {
        await this.page.goto(
            `https://${this.domain}/schedules`
          );
    }
    
    async checkDateTimeText() {
        
    }
}

    