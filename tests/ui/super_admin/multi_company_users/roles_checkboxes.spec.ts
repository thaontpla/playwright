import { expect, test } from "@core/fixtures";
import { RolesCheckBoxesSuperPage } from "../../../../page/ui/super_admin/multi_company_users/roles_checkboxes";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const rCBSPage = new RolesCheckBoxesSuperPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await rCBSPage.gotoRCBSPage();
  });
  test("@Web the label must Change 'Select Role' to 'Select Roles' @TC_2503_1 ", async ({
    page,
    conf,
  }) => {
    const rCBSPage = new RolesCheckBoxesSuperPage(page, conf.suiteConf.domain);
    await expect(rCBSPage.label).toBeVisible();
  });
  test("@Web when click the check box must be turn to checked status @TC_2503_2 ", async ({
    page,
    conf,
  }) => {
    const rCBSPage = new RolesCheckBoxesSuperPage(page, conf.suiteConf.domain);
    await expect(rCBSPage.oneEmployee).toBeVisible();
        await expect(rCBSPage.oneCompany).toBeVisible();

        rCBSPage.oneEmployee.click();

        const row2s = await rCBSPage.allSelectedsCompaniesList;
        row2s.nth(0).click();

        await rCBSPage.AreaDirectorInput.click();
        let before = rCBSPage.AreaDirectorInput.isChecked();
        await rCBSPage.AreaDirectorInput.click();
        let after = rCBSPage.AreaDirectorInput.isChecked();
        await expect(before != after).toBeTruthy();
  });
  test("@Web the user must have atleast one role @TC_2503_3 ", async ({
    page,
    conf,
  }) => {
    const rCBSPage = new RolesCheckBoxesSuperPage(page, conf.suiteConf.domain);
    await rCBSPage.checkCheckAll();
    if (await rCBSPage.AreaDirectorInput.isChecked())
    await rCBSPage.AreaDirectorInput.click();
    if (await rCBSPage.CompanyAdministratorInput.isChecked())
    await rCBSPage.CompanyAdministratorInput.click();
    if (await rCBSPage.FieldTechnicianInput.isChecked())
        await rCBSPage.FieldTechnicianInput.click();
    if (await rCBSPage.OfficeStaffInput.isChecked())
    await rCBSPage.OfficeStaffInput.click();
    if (await rCBSPage.SystemAdminInput.isChecked())
    await rCBSPage.SystemAdminInput.click();
    await expect(rCBSPage.atLeastOneRoleBox).toBeVisible();
  });
  test("@Web the user user can have mutil roles @TC_2503_4 TC_2584_1 ", async ({
    page,
    conf,
  }) => {
    const rCBSPage = new RolesCheckBoxesSuperPage(page, conf.suiteConf.domain);
    await rCBSPage.checkCheckAll();
    await expect(rCBSPage.successfullyBox).toBeVisible();
  });

  
  
