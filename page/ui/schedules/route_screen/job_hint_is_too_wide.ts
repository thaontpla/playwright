import { Locator, Page } from "@playwright/test";

export class JobHintWidePage {
    page : Page;
    domain: String;
    boxwitdh: number;
    toolTip: Locator;
    oneJob: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.toolTip = page.locator('text=Description:');
        this.oneJob = page.locator("//*/text()[normalize-space(.)='700 Market']/parent::*");
    }

    async gotoJobHintWidePage() {
        await this.page.goto(
            `https://${this.domain}/schedules/routes/2022-08-28`
          );
    }
    
}

    