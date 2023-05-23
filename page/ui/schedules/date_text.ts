import { Locator, Page } from "@playwright/test";

export class DateText {
    page : Page;
    domain: String;
    boxwitdh: number;
    DateTimeText: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.DateTimeText = page.locator('text=August 2022');
    }

    async gotoDateText() {
        await this.page.goto(
            `https://${this.domain}/schedules`
          );
    }
    
    async checkDateTimeText() {
        const box = await this.DateTimeText.boundingBox();
        this.boxwitdh = await box.width;
        console.log ("aaa:", this.boxwitdh);
    }
}

    