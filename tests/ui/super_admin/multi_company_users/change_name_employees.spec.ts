import { expect, test } from "@core/fixtures";
import { ChangeEmployeesNamePage } from "../../../../page/ui/super_admin/multi_company_users/change_name_employees";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const cENPage = new ChangeEmployeesNamePage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await cENPage.gotoChangeEmployeesNamePage();
  });
  test("@Web change the name of employees and it should able to save employees roles @TC_2660_1 ", async ({
    page,
    conf,
  }) => {
    const cENPage = new ChangeEmployeesNamePage(page, conf.suiteConf.domain);
    await expect(cENPage.oneitem).toBeVisible();
    await expect(cENPage.oneEmployee).toBeVisible();
    await cENPage.oneEmployee.click();
    await cENPage.firstName.click();
    await cENPage.firstName.fill("tuutest");
    await cENPage.lastName.click();
    await cENPage.lastName.fill("Martin");


    const rows = await cENPage.rightList;
    await rows.nth(0).click();
    await cENPage.saveBtn.click();
    await expect(cENPage.successfullyBox).toBeVisible();
    await cENPage.firstName.click();
    await cENPage.firstName.fill("Alexander");
    await cENPage.lastName.click();
    await cENPage.lastName.fill("Martin");
    await cENPage.saveBtn.click();

  });
  