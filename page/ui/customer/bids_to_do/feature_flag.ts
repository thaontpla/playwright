import { Locator, Page } from "@playwright/test";

export class FeatureFlagPage {
    page : Page;
    domain: String;
    sortByDropdownOptionDistance: Locator;
    locateBtn: Locator;
    bidderCheckbox: Locator;
    bidderRadio: Locator;
    dropdownBidersFilterTop: Locator;
    dropdownAssignedBidder: Locator;
    successMessage: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain; 
        this.sortByDropdownOptionDistance = page.locator('//label[contains(text(),"Sort by")]/following-sibling::div/descendant::select/option[contains(text(),"Distance")]');
        this.dropdownBidersFilterTop = page.locator('//label[contains(text(),"Filter by Bidder")]/following-sibling::div/descendant::select');
        this.dropdownAssignedBidder = page.locator('//label[contains(text(),"Assign Bidder")]/following-sibling::div/descendant::select');
        this.locateBtn = page.locator('//h4/div/a');
        this.bidderCheckbox = page.locator('//input[@name="Bidder"]');
        this.bidderRadio = page.locator('//input[@name="bidder"]');
        this.successMessage = page.locator('text=Save successfully!');

    }

    async gotoBidsTodo() {
        await this.page.goto(
            `https://${this.domain}/customers/bidtodo`
          );
    }
    async gotoEmployeesSchedule() {
        await this.page.goto(
            `https://${this.domain}/employees/a%20a/ae1b01b6-7f87-4e07-bbb8-1b447a639b35/schedule`
          );
    }
    
}

    