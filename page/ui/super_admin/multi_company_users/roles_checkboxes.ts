import { Locator, Page ,expect} from "@playwright/test";

export class RolesCheckBoxesSuperPage {
    page : Page;
    domain: String;
    oneitem: Locator;
    leftList: Locator;
    leftSingleArow: Locator;
    rightSingleArow: Locator;
    leftAllArow: Locator;
    rightAllArow: Locator;
    rightList: Locator;
    label: Locator;
    oneCompany: Locator;
    oneEmployee: Locator;
    AreaDirectorInput: Locator;
    CompanyAdministratorInput: Locator;
    FieldTechnicianInput: Locator;
    OfficeStaffInput: Locator;
    SystemAdminInput: Locator;
    ArrInput: Locator;
    SaveBtn: Locator;
    theCorrectLabel: Locator;
    successfullyBox: Locator;
    atLeastOneRoleBox: Locator;
    allEmployeesList: Locator;
    allCompaniesList: Locator;
    allSelectedsCompaniesList: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.label = page.locator("text=Select Roles");
        this.oneCompany = page.locator("text=Johnson's Window Cleaning >> nth=0")
        this.oneEmployee = page.locator("text=Alexis Rodefer >> nth=0")
        this.leftSingleArow = page.locator("//p[contains(text(),'>')]");
        this.rightSingleArow = page.locator("//p[contains(text(),'<')]");
        this.leftAllArow = page.locator("//p[contains(text(),'>>')]");
        this.rightAllArow = page.locator("//p[contains(text(),'<<')]");
        this.AreaDirectorInput = page.locator('input[name="Area Director"]');
        this.CompanyAdministratorInput = page.locator('input[name="Company Administrator"]');
        this.FieldTechnicianInput = page.locator('input[name="Field Technician"]');
        this.OfficeStaffInput = page.locator('input[name="Office Staff"]');
        this.SystemAdminInput = page.locator('input[name="System Admin"]');
        this.ArrInput = page.locator('span>>span>>input[name=*]');
        this.SaveBtn = page.locator('button:has-text("Save Changes")');
        this.theCorrectLabel = page.locator('text=Select Roles');
        this.successfullyBox = page.locator('text=Saved successfully.');
        this.atLeastOneRoleBox = page.locator('text=You must specify at least one role!');
        this.allEmployeesList = page.locator("//p[contains(text(),'Select Employee')]/following-sibling::div/descendant::div[@class='jss33']/descendant::p");
        this.allCompaniesList = page.locator("//p[contains(text(),'All Companies')]/following-sibling::div/descendant::div[@class='jss33']/descendant::p");
        this.allSelectedsCompaniesList = page.locator("//p[contains(text(),'Selected Companies')]/following-sibling::div/descendant::div[@class='jss33']/descendant::p");

    }
    async gotoRCBSPage() {
        await this.page.goto(
            `https://${this.domain}/super-admin/multi-company-users`
          );
    }
    async checkCheckAll() {

        await expect(this.oneEmployee).toBeVisible();
        await expect(this.oneCompany).toBeVisible();

        this.oneEmployee.click();

        const row2s = await this.allSelectedsCompaniesList;
        row2s.nth(0).click();

        if (await this.AreaDirectorInput.isChecked()) {
            await console.log("free");
        } else {
            await this.AreaDirectorInput.click();
        }

        if (await this.CompanyAdministratorInput.isChecked()) {
            await console.log("free");
        } else {
            await this.CompanyAdministratorInput.click();
        }
        if (await this.FieldTechnicianInput.isChecked()) {
            await console.log("free");
        } else {
            await this.FieldTechnicianInput.click();
        }
        if (await this.OfficeStaffInput.isChecked()) {
            await console.log("free");
        } else {
            await this.OfficeStaffInput.click();
        }
        if (await this.SystemAdminInput.isChecked()) {
            await console.log("free");
        } else {
            await this.SystemAdminInput.click();
        }
        await this.SaveBtn.click();
    }
}

    