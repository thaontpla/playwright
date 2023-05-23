import { Locator, Page } from "@playwright/test";

export class ResponsiveIssuesUIPage {
    page : Page;
    domain: String;
    boxwitdh: number;
    DateTimeText: Locator;
    switchbtn: Locator;
    togglebtn: Locator;
    Schedulesbtn: Locator;
    theday: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.DateTimeText = page.locator('[class*="MuiGrid-grid-md-5"]>span');
        this.switchbtn = page.locator('[class*="MuiToggleButtonGroup-root"]>button');
        this.togglebtn = page.locator('[class*="jss2188"]');
        this.Schedulesbtn = page.locator('//span[contains(text(),"Schedules")]');
        this.theday = page.locator('td');
    }

    async gotoResponsiveIssuesUIPage() {
        await this.page.goto(
            `https://${this.domain}/schedules`
          );
    }
    async gotoDashboard() {
        await this.page.goto(
            `https://${this.domain}/dashboard`
          );
    }
    
    async checkDateTimeInOneLine() {
    }
}

    