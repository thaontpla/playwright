import { expect, test } from "@core/fixtures";
import { OpenManageEmployees } from "../../../../page/ui/employees/manage/open_manage";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const oMEPage = new OpenManageEmployees(page, conf.suiteConf.domain);
    const login = new Login(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);

    await oMEPage.gotoOpenManageEmployees();
  });
  
  test("@Web The Employee clicked manage submenu auto expands and navigates to the manage screen  @TC_2673_1 ", async ({
    page,
    conf,
  }) => {
    const oMEPage = new OpenManageEmployees(page, conf.suiteConf.domain);
    await oMEPage.employessSubMenu.click();
    let url = await page.url();
    await expect(url).toContain("/employees");
  });