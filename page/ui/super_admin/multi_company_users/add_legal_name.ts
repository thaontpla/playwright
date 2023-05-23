import { Locator, Page } from "@playwright/test";

export class AddLegalNamePage {
    page : Page;
    domain: String;
    oneitem: Locator;
    leftList: Locator;
    leftSingleArow: Locator;
    rightSingleArow: Locator;
    leftAllArow: Locator;
    rightAllArow: Locator;
    rightList: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.oneitem = page.locator("text=Johnson's Window Cleaning >> nth=0")
        this.leftList = page.locator("//p[contains(text(),'All Companies')]/following-sibling::div/descendant::div[@class='jss33']/descendant::p");
        this.leftSingleArow = page.locator("//p[contains(text(),'>')]");
        this.rightSingleArow = page.locator("//p[contains(text(),'<')]");
        this.leftAllArow = page.locator("//p[contains(text(),'>>')]");
        this.rightAllArow = page.locator("//p[contains(text(),'<<')]");
        this.rightList = page.locator("//p[contains(text(),'Selected Companies')]/following-sibling::div/descendant::div[@class='jss33']/descendant::p");
    
    }
    async gotoAddLegalNamePage() {
        await this.page.goto(
            `https://${this.domain}/super-admin/multi-company-users`
          );
    }
}

    