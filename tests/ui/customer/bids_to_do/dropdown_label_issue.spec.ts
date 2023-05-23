import { expect, test } from "@core/fixtures";
import { DropdownLabelIssuePage } from "../../../../page/ui/customer/bids_to_do/dropdown_label_issue";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const dLIPage = new DropdownLabelIssuePage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await dLIPage.gotoDropdownLabelIssuePage();
  });
  test("@Web check if check Option Dropdown Not Overlapping' @TC_2602_1 ", async ({
    page,
    conf,
  }) => {
    const dLIPage = new DropdownLabelIssuePage(page, conf.suiteConf.domain);
    await dLIPage.dropdown.first().selectOption('a017d8ea-df45-4b69-b903-dea3d162f646');
    await expect(dLIPage.successMessage).toBeVisible();
    await dLIPage.dropdown.first().selectOption('f4c04a13-1745-41c2-bd65-8b0e02571378');
    await expect(dLIPage.successMessage).toBeVisible();
});