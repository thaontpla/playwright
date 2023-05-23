import { Locator, Page ,expect} from "@playwright/test";

export class AddExpirationDatePage {
    page : Page;
    domain: String;
    path: string;
    employees: Locator;
    attachmentsTab: Locator;
    addAttachmentsBtn: Locator;
    successMessage: Locator;
    inputExpirationDate: Locator;
    inputFiles: Locator;
    uploadFilesBtn: Locator;
    calanderBtn: Locator;
    calanderOneDay: Locator;
    calanderOKBtn: Locator;
    gridname: Locator;
    imageExamplePath: string;
    constructor(page : Page,domain: String, path:string) {
        this.page=page;
        this.domain=domain;   
        this.employees = page.locator('//div[@class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2"]');
        this.attachmentsTab = page.locator('button[role="tab"]:has-text("Attachments")');
        this.addAttachmentsBtn = page.locator('text=File NameUploaded ByDate UploadedExpiration DateSize >> button');
        this.successMessage = page.locator("text=Add files successfully.")
        this.inputExpirationDate = page.locator('input[name="expirationDate"]');
        this.inputFiles = page.locator('svg.MuiSvgIcon-root.MuiDropzoneArea-icon');
        this.uploadFilesBtn = page.locator('text=ADD FILES');
        this.calanderBtn = page.locator('text=Expiration DateExpiration Date >> button');
        this.calanderOneDay = page.locator('button:has-text("12")');
        this.calanderOKBtn = page.locator('button:has-text("OK")');
        this.gridname = page.locator('//tr/td/div/a');
        this.imageExamplePath = path;
    
    }

    async gotoAddExpirationDatePage() {
        await this.page.goto(
            `https://${this.domain}/employees/Bing%20Crosby/78dd40c2-082e-41f7-a5c8-e4bd2584c163/attachments`
          );
    }
    async checkDateExpirationExist() {
        await this.addAttachmentsBtn.click();

        await expect(this.inputExpirationDate).toBeVisible();
    }
    async checkDatePicker() {
        await this.checkDateExpirationExist();
        await this.calanderBtn.click();
        await this.calanderOneDay.click();
        await this.calanderOKBtn.click();
    }
    async checkUpload() {
        await this.checkDatePicker();
        this.page.on("filechooser", async(filechooser) => {
            //  filechooser.isMultiple();
            await filechooser.setFiles( this.imageExamplePath);
        })
        await this.page.click("svg.MuiSvgIcon-root.MuiDropzoneArea-icon", { force: true });
        await this.inputFiles.click();
        await this.uploadFilesBtn.click();
        await expect(this.successMessage).toBeVisible();
    }
}

    