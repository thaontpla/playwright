import { expect, test } from "@core/fixtures";
import { JobHistoryModalSize } from "../../../../page/ui/employees/today_route_screen/Job_history_modal_size";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const jHMSPage = new JobHistoryModalSize(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await jHMSPage.gotoJobHistoryModalSize();
  });
  test("@Web check if Notes in to accordion @TC_2669_1 ", async ({
    page,
    conf,
  }) => {
    const jHMSPage = new JobHistoryModalSize(page, conf.suiteConf.domain);
    await jHMSPage.datepicker.fill("2000-05-20");
    await page.waitForTimeout(5000);
    await jHMSPage.datepicker.fill("08-28-2022");
    await page.waitForTimeout(5000);
    await jHMSPage.selectEmployees.selectOption('ae1b01b6-7f87-4e07-bbb8-1b447a639b35');
    await page.waitForTimeout(5000);
    await jHMSPage.oneitem.click();
    await jHMSPage.jobHistoryBtn.click();
    await jHMSPage.loadMoreBtn.click();
    let element = await jHMSPage.panelJobHistory.last();
    let height = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('height');
    });
    console.log(height);
    await expect(height == "500px").toBeTruthy();
    await jHMSPage.loadMoreBtn.click();
    let element2 = await jHMSPage.panelJobHistory.last();
    let height2 = await element2.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('height');
    });
    console.log(height2);
    await expect(height2 == "500px").toBeTruthy();
  });
 
 
