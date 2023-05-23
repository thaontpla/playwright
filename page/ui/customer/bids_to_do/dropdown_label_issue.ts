import { Locator, Page } from "@playwright/test";

export class DropdownLabelIssuePage {
    page : Page;
    domain: String;
    dropdown: Locator;
    successMessage: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain; 
        this.dropdown = page.locator('.MuiGrid-root > .MuiCardActions-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root');
        this.successMessage = page.locator('text=Save successfully!');

    }

    async gotoDropdownLabelIssuePage() {
        await this.page.goto(
            `https://${this.domain}/customers/bidtodo/2022-08-18`
          );
    }
    
}

    