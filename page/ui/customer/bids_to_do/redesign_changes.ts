import { Locator, Page } from "@playwright/test";

export class DefaultToFilteredBidder {
    page : Page;
    domain: String;
    filterDropdown: Locator;
    printDropdown: Locator;
    successMessage: Locator;
    allCheckbox: Locator;
    printBtn: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain; 
        this.filterDropdown = page.locator("//label[contains (text(),'Filter by Bidder')]/following-sibling::div/select");
        this.printDropdown = page.locator(`(//span[contains (text(),'Print Bids To Do')]/../../following-sibling::div/descendant::select)[1]`);
        this.allCheckbox = page.locator("//span[contains (text(),'All Bidders')]/../descendant::span/input");
        this.successMessage = page.locator('text=Save successfully!');
        this.printBtn = page.locator('text=Print');

    }

    async gotoDefaultToFilteredBidder() {
        await this.page.goto(
            `https://${this.domain}/customers/bidtodo/2022-08-18`
          );
    }
    
}

    