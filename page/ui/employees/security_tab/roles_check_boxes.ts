import { Locator, Page } from "@playwright/test";

export class RolescheckboxesPage {
    page : Page;
    domain: String;
    EmployeesMenu: Locator;
    ManageSubMenu: Locator;
    SecurityTab: Locator;
    AreaDirectorInput: Locator;
    CompanyAdministratorInput: Locator;
    FieldTechnicianInput: Locator;
    SystemAdminInput: Locator;
    OfficeStaffInput: Locator;
    ArrInput: Locator;
    SaveBtn: Locator;
    theCorrectLabel: Locator;
    successfullyBox: Locator;
    atLeastOneRoleBox: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.EmployeesMenu = page.locator('button:has-text("Employees")');
        this.ManageSubMenu = page.locator(' a[role="button"]:has-text("Manage")');
        this.SecurityTab = page.locator('button[role="tab"]:has-text("Security")');
        this.AreaDirectorInput = page.locator('input[name="Area Director"]');
        this.CompanyAdministratorInput = page.locator('input[name="Company Administrator"]');
        this.FieldTechnicianInput = page.locator('input[name="Field Technician"]');
        this.OfficeStaffInput = page.locator('input[name="Office Staff"]');
        this.SystemAdminInput = page.locator('input[name="System Admin"]');
        this.ArrInput = page.locator('span>>span>>input[name=*]');
        this.SaveBtn = page.locator('text=RoleSelect RolesArea DirectorCompany AdministratorField TechnicianOffice StaffSy >> button');
        this.theCorrectLabel = page.locator('text=Select Roles');
        this.successfullyBox = page.locator('text=Saved successfully.');
        this.atLeastOneRoleBox = page.locator('text=You must specify at least one role!');
    }

    async gotoRolescheckboxes() {
        await this.page.goto(
            `https://${this.domain}/employees/Bing%20Crosby/78dd40c2-082e-41f7-a5c8-e4bd2584c163/security`
          );
    }
    async clickInit() {
        await this.EmployeesMenu.click();
        await this.ManageSubMenu.first().click();
        await this.SecurityTab.click();
    }
    async checkAll() {
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

    