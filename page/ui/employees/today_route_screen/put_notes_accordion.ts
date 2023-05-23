import { Locator, Page } from "@playwright/test";

export class NotesPage {
    page : Page;
    nodata : Locator;
    domain: String;
    datepicker: Locator;
    selectEmployees: Locator;
    option: Locator;
    oneitem: Locator;
    Notes: Locator;
    fieldInNotes: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.datepicker = page.locator( '[placeholder="MM\\/DD\\/YYYY"]');
        this.nodata = page.locator("text='No data found.'");
        this.selectEmployees = page.locator('select[name="employee"]');
        this.option = page.locator('//option[contains(text(),"Bing Crosby")]');
        this.oneitem = page.locator('text=Time:03:30 AMCustomer:ABM-AMan Hours:Status:On The WayJob StartedJob Completed​T');
        this.Notes = page.locator('text=Notes');
        this.fieldInNotes = page.locator('text=This is a description. It should go into Split Description.Job Description');

    }

    async gotoNotesPage() {
        await this.page.goto(
            `https://${this.domain}/employees/today-route`
          );
    }
   
}

    