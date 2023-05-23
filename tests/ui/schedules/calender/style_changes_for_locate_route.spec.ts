import { expect, test } from "@core/fixtures";
import { StyleChangeColour } from "../../../../page/ui/schedules/calender/style_changes_for_locate_route";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const sCCPage = new StyleChangeColour(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await sCCPage.gotoStyleChangeColour();
  });
  test("@Web check if yellow range turn color to  #F5D71D @TC_2585_1 ", async ({
    page,
    conf,
  }) => {
    const sCCPage = new StyleChangeColour(page, conf.suiteConf.domain);
    await sCCPage.LocaterIcon.first().click();
    let element = await sCCPage.oneRange.nth(0);
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "rgb(245, 215, 29)").toBeTruthy();
 });
  test("@Web check if red range turn color to  #F72A0F @TC_2585_2 ", async ({
    page,
    conf,
  }) => {
    const sCCPage = new StyleChangeColour(page, conf.suiteConf.domain);
    await sCCPage.LocaterIcon.first().click();
    let element = await sCCPage.oneRange.nth(2);
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    await expect(color == "rgb(247, 42, 15)").toBeTruthy();
});
 
