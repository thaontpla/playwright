import { Locator, Page } from "@playwright/test";

export class LocateRangeSettingsPage {
    page : Page;
    domain: String;
    adminMenu: Locator;
    yellowMiles: Locator;
    redMiles: Locator;
    saveBtn: Locator;
    duppleAnoun: Locator;
    invalidAnoun: Locator;
    invalidBlankAll: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.adminMenu = page.locator('a[role="button"]:has-text("Admin")');
        this.yellowMiles = page.locator('input[name="yellowMiles"]');
        this.redMiles = page.locator('input[name="redMiles"]');
        this.saveBtn = page.locator('button:has-text("Save")');
        this.duppleAnoun = page.locator('text=Must not coincide with Yellow Miles');
        this.invalidAnoun = page.locator('text=This value needs to be greater than 0');
        this.invalidBlankAll = page.locator('text=Please check the fields.');
    }

    async gotoLocateRangeSettings() {
        await this.page.goto(
            `https://${this.domain}/dashboard`
          );
    }
}

    