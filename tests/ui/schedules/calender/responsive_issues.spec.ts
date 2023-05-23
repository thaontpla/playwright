import { expect, test } from "@core/fixtures";
import { ResponsiveIssuesUIPage } from "../../../../page/ui/schedules/calender/responsive_issues";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const rIPage = new ResponsiveIssuesUIPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await rIPage.gotoResponsiveIssuesUIPage();
  });
  test("@Web check if date time text display in 1 line on PC scree @TC_2533_1 ", async ({
    page,
    conf,
  }) => {
    const rIPage = new ResponsiveIssuesUIPage(page, conf.suiteConf.domain);
    let element = await rIPage.DateTimeText;
    let atribute = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('white-space');
    });
    console.log(atribute);
    await expect(atribute == "nowrap").toBeTruthy();
  });
  test.only("@Web check if  switch button work well @TC_2533_2 ", async ({
    page,
    conf,
  }) => {
    const rIPage = new ResponsiveIssuesUIPage(page, conf.suiteConf.domain);
   
    await rIPage.gotoDashboard();
    await rIPage.Schedulesbtn.click();
    await rIPage.switchbtn.last().click();
    await page.waitForTimeout(5000);
    let a = await rIPage.theday.count();
    await expect(a == 7).toBeTruthy();
    await rIPage.switchbtn.first().click();
    await page.waitForTimeout(5000);
    let b = await rIPage.theday.count();
    await expect(b > 7).toBeTruthy();
   
    
    
  });
  test("@Web check if double click on switch button must return the current interface @TC_2533_2 ", async ({
    page,
    conf,
  }) => {
    const rIPage = new ResponsiveIssuesUIPage(page, conf.suiteConf.domain);
   
    await rIPage.gotoDashboard();
    await rIPage.Schedulesbtn.click();
    await rIPage.switchbtn.first().click();
    await page.waitForTimeout(5000);
    await rIPage.switchbtn.first().click();
    await page.waitForTimeout(5000);
    await expect(rIPage.DateTimeText).toBeVisible();
    await page.waitForTimeout(5000);
  });
  
