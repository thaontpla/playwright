import { expect, test } from "@core/fixtures";
import { CollapsibleCardsPage } from "../../../../page/ui/admin/information_tab/collapsible_cards";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const cCPage = new CollapsibleCardsPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await cCPage.gotoCollapsibleCardsPage();
  });
  test("@Web Check if Information Card can collapsible @TC_2518_1 ", async ({
    page,
    conf,
  }) => {
    const cCPage = new CollapsibleCardsPage(page, conf.suiteConf.domain);
    await cCPage.arowIF.click();
    await expect(cCPage.inputIF).not.toBeVisible();
    await cCPage.arowIF.click();
    await expect(cCPage.inputIF).toBeVisible();
  });
  test("@Web check if  Locate Range Settings card can toggle collapsible  @TC_2518_2 ", async ({
    page,
    conf,
  }) => {
    const cCPage = new CollapsibleCardsPage(page, conf.suiteConf.domain);
    await cCPage.arowLRS.click();
    await expect(cCPage.inputLRS).not.toBeVisible();
    await cCPage.arowLRS.click();
    await expect(cCPage.inputLRS).toBeVisible();
  });
  test("@Web check if  Pay Period Settings card can toggle collapsible  @TC_2518_3 ", async ({
    page,
    conf,
  }) => {
    const cCPage = new CollapsibleCardsPage(page, conf.suiteConf.domain);
    await cCPage.arowPPS.click();
    await expect(cCPage.textPPS).not.toBeVisible();
    await cCPage.arowPPS.click();
    await expect(cCPage.textPPS).toBeVisible();
  });
  
  test("@Web check if Invoice Settings card can toggle collapsible  @TC_2518_4 ", async ({
    page,
    conf,
  }) => {
    const cCPage = new CollapsibleCardsPage(page, conf.suiteConf.domain);
    await cCPage.arowIS.click();
    await expect(cCPage.inputIS).not.toBeVisible();
    await cCPage.arowIS.click();
    await expect(cCPage.inputIS).toBeVisible();
  });
  
