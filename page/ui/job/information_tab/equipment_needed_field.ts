import { Locator, Page } from "@playwright/test";

export class EquipmentNeededPage{
    page : Page;
    domain: String;
    boxwitdh: number;
    oneJobRow: Locator;
    informationTab: Locator;
    equipmentField: Locator;
    abcEquipmentField: Locator;
    abcXyzEquipmentField: Locator;
    blankBubbles: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.oneJobRow = page.locator('tbody>tr');
        this.informationTab = page.locator('button:has-text("Information")');
        this.equipmentField = page.locator('text=Equipment NeededEquipment Needed >> input[type="text"]');
        this.abcEquipmentField = page.locator('text=abcEquipment Needed >> input[type="text"]');
        this.abcXyzEquipmentField = page.locator('text=abcxyzEquipment Needed >> input[type="text"]');
        this.blankBubbles = page.locator('text=abcxyz Equipment Needed >> input[type="text"]');
    }

    async gotoEquipmentNeededPage() {
        await this.page.goto(
            `https://${this.domain}/job-completion`
          );
    }
   
}

    