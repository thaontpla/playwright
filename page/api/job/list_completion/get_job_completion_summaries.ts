import { Locator, Page } from "@playwright/test";

export class GetJobCompletionSummaries {
    page : Page;
    domain: String;
    oneitem: Locator;
    commissionTab: Locator;
    Estimator: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.oneitem = page.locator('tbody>tr');
        this.commissionTab = page.locator('button[role="tab"]:has-text("Commissions")');
        this.Estimator = page.locator('[placeholder="Estimator (non-commissioned)"]');
   }

    async gotoGetJobCompletionSummaries() {
        await this.page.goto(
            `https://${this.domain}/job-completion`
          );
    }
    
    async checkDateTimeText() {
        
    }
}

    