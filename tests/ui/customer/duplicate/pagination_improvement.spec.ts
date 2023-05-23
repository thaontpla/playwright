import { expect, test } from "@core/fixtures";
import { PanigationImprovement } from "../../../../page/ui/customer/duplicate/pagination_improvement";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const pIPage = new PanigationImprovement(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await pIPage.gotoPanigationImprovement();
  });
  test("@Web check if  Next button work well' @TC_2565_1 ", async ({
    page,
    conf,
  }) => {
    const pIPage = new PanigationImprovement(page, conf.suiteConf.domain);
    await pIPage.page1.click();
    await pIPage.next.click();
    let element = await pIPage.page2;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "#134ADB").toBeTruthy();
  });
  test("@Web check if Previous button work well' @TC_2565_2 ", async ({
    page,
    conf,
  }) => {
    const pIPage = new PanigationImprovement(page, conf.suiteConf.domain);
    await pIPage.page2.click();
    await pIPage.previous.click();
    let element = await pIPage.page1;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "#134ADB").toBeTruthy();
  });
  test("@Web check if panigation number button work well' @TC_2565_3 ", async ({
    page,
    conf,
  }) => {
    const pIPage = new PanigationImprovement(page, conf.suiteConf.domain);
    await pIPage.page1.click();
    let element = await pIPage.page1;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "#134ADB").toBeTruthy();
  });
