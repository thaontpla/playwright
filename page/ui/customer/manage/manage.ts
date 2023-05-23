import { Page } from "@playwright/test";

export class ManagePage {
    page:Page;
    domain: string;
    constructor(page:Page, domain: string) {
        this.page = page;
        this.domain = domain;
    }

    /**
     * Navigate tab Job Addresses
     */
    async gotoJobAddresses() {
        await this.page.goto(
            `https://${this.domain}/customers/allcustomers`
          );
          await this.page.click(`(//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12']/descendant::a)[1]`);
          await this.page.click(`//span[contains(text(),'Job Addresses')]`);
    }
    
    /**
     * Attachments file for the job addresses
     * @param filePath0 
     * @param filePath1 
     * @param note 
     * @param expirationDate 
     */
    async uploadAttachments(filePath0: string,filePath1: string, note: string, expirationDate: string) {
        await this.page.click(`//th[contains(text(),'Display to Field Techs')]/following-sibling::th/descendant::button`);
    const [uploadFile] = await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.page.click(`//div[@class='MuiDropzoneArea-textContainer']`)
    ])
    uploadFile.setFiles([filePath0,filePath1]);
    await this.page.fill(`//textarea`, note);
    await this.page.click(`//span[contains(text(),'Display to field techs')]/preceding-sibling::span/descendant::input`,{timeout:2000});
    await this.page.fill(`//input[@name='expirationDate']`,expirationDate);
    await this.page.waitForSelector(`//input[@value='${expirationDate}']`);
    }
}