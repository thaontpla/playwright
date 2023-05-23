import { Locator, Page } from "@playwright/test";

export class JobHistoryModalSize {
    page : Page;
    domain: String;
    datepicker: Locator;
    selectEmployees: Locator;
    oneitem: Locator;
    jobHistoryBtn: Locator;
    loadMoreBtn: Locator;
    panelJobHistory: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.datepicker = page.locator( '[placeholder="MM\\/DD\\/YYYY"]');
        this.selectEmployees = page.locator("//label[contains (text(),'Employee')]/following-sibling::div/select");
        this.oneitem = page.locator("//span[contains (text(),'Jobs')]/../../following-sibling::div");
        this.jobHistoryBtn = page.locator('text=View Job History');
        this.loadMoreBtn = page.locator('text=Load more');
        this.panelJobHistory = page.locator('//div[@class="MuiCardContent-root"]');

    }

    async gotoJobHistoryModalSize() {
        await this.page.goto(
            `https://${this.domain}/employees/today-route`
          );
    }
   
}

    