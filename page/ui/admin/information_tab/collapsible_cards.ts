import { Locator, Page } from "@playwright/test";

export class CollapsibleCardsPage {
    page : Page;
    domain: String;
    arowIF: Locator;
    arowLRS: Locator;
    arowPPS: Locator;
    arowIS: Locator;
    inputIF: Locator;
    inputLRS: Locator;
    textPPS: Locator;
    inputIS: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.arowIF = page.locator('[aria-label="Information"]');
        this.arowLRS = page.locator('[aria-label="Locate Range Settings"]');
        this.arowPPS = page.locator('[aria-label="Pay Period Settings"]');
        this.arowIS = page.locator('[aria-label="Invoice Settings"]');
        this.inputIF = page.locator('input[name="zipCode"]');
        this.inputLRS = page.locator('input[name="redMiles"]');
        this.textPPS = page.locator('p:has-text("Hours")');
        this.inputIS = page.locator('div:nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiCardContent-root');

    }

    async gotoCollapsibleCardsPage() {
        await this.page.goto(
            `https://${this.domain}/admin/Tuu%20VV/81c248aa-bb76-4b5c-97b8-3b59419e97d3/information`
          );
    }
}

    