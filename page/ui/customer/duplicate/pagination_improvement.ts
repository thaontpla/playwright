import { Locator, Page } from "@playwright/test";

export class PanigationImprovement {
    page : Page;
    domain: String;
    previous: Locator;
    next: Locator;
    page1: Locator;
    page2: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.previous = page.locator('text=previous');
        this.next = page.locator('text=next');
        this.page1 = page.locator('[aria-label="Page 1"]');
        this.page1 = page.locator('[aria-label="Page 2"]');
    }

    async gotoPanigationImprovement() {
        await this.page.goto(
            `https://${this.domain}/customers/duplicate`
          );
    }
    
}

    