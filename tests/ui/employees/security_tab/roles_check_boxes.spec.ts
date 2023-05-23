import { expect, test } from "@core/fixtures";
import { RolescheckboxesPage } from "../../../../page/ui/Employees/security_tab/roles_check_boxes";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const rCBPage = new RolescheckboxesPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await rCBPage.gotoRolescheckboxes();
    // await rCBPage.clickInit();
  });
  test("@Web check if label turn to 'Select Roles' @TC_2501_1 ", async ({
    page,
    conf,
  }) => {
    const rCBPage = new RolescheckboxesPage(page, conf.suiteConf.domain);
    await expect(rCBPage.theCorrectLabel).toBeVisible();
  });
  test("@Web  check if change checked status @TC_2501_2 ", async ({
    page,
    conf,
  }) => {
    const rCBPage = new RolescheckboxesPage(page, conf.suiteConf.domain);
    await rCBPage.AreaDirectorInput.click();
        let before = rCBPage.AreaDirectorInput.isChecked();
        await rCBPage.AreaDirectorInput.click();
        let after = rCBPage.AreaDirectorInput.isChecked();
        await expect(before != after).toBeTruthy();
  });
  test("@Web check if check all roles @TC_2501_3 ", async ({
    page,
    conf,
  }) => {
    const rCBPage = new RolescheckboxesPage(page, conf.suiteConf.domain);
    await rCBPage.checkAll();
    await expect(rCBPage.successfullyBox).toBeVisible();
  });
  test("@Web check if atleast one role @TC_2501_4 ", async ({
    page,
    conf,
  }) => {
    const rCBPage = new RolescheckboxesPage(page, conf.suiteConf.domain);
    await rCBPage.checkAll();
    if (await rCBPage.AreaDirectorInput.isChecked())
        await rCBPage.AreaDirectorInput.click();
    if (await rCBPage.CompanyAdministratorInput.isChecked())
        await rCBPage.CompanyAdministratorInput.click();
    if (await rCBPage.FieldTechnicianInput.isChecked())
        await rCBPage.FieldTechnicianInput.click();
    if (await rCBPage.OfficeStaffInput.isChecked())
        await rCBPage.OfficeStaffInput.click();
    if (await rCBPage.SystemAdminInput.isChecked())
        await rCBPage.SystemAdminInput.click();
    await expect(rCBPage.atLeastOneRoleBox).toBeVisible();
  });
