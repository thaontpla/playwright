import { Locator, Page } from "@playwright/test";

export class EmailModal {
    page : Page;
    domain: String;
    boxwitdh: number;
    onejobrow: Locator;
    QuoteInvoice: Locator;
    CustEmailField: Locator;
    BCCEmailField: Locator;
    newbubbles: Locator;
    newinvalidbubbles: Locator;
    newBCCbubbles: Locator;
    validbubblesBCC: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.onejobrow = page.locator('tbody>tr');
        this.QuoteInvoice = page.locator('button:has-text("Quote/Invoice")');
        this.CustEmailField = page.locator('text=jane@smith.comCustomer Email >> input[type="text"]');
        this.BCCEmailField = page.locator('text=tuuvv.uit@gmail.comBCC Email >> input[type="text"]');
        this.newbubbles = page.locator('div[role="button"]:has-text("tuu@gmail.com")');
        this.newBCCbubbles = page.locator('div[role="button"]:has-text("tuuBCC@gmail.com")');
        this.validbubblesBCC = page.locator('text=tuuvv.uit@gmail.comtuuBCC@gmail.comBCC Email >> input[type="text"]');
        this.newinvalidbubbles = page.locator('div[role="button"]:has-text("tuuinvalid@gmail")');
    }

    async gotoEmailModal() {
        await this.page.goto(
            `https://${this.domain}/job-completion`
          );
    }
    
    async checkDateTimeText() {
        
    }
}

    