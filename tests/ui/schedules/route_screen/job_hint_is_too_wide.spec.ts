import { expect, test } from "@core/fixtures";
import { JobHintWidePage } from "../../../../page/ui/schedules/route_screen/job_hint_is_too_wide";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const jHWPage = new JobHintWidePage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await jHWPage.gotoJobHintWidePage();
  });
  test("@Web hint text display should fit screen  @TC_2678_1 ", async ({
    page,
    conf,
  }) => {
    const jHWPage = new JobHintWidePage(page, conf.suiteConf.domain);
    let element = await jHWPage.oneJob;
    await element.click();
 
    await element.hover({timeout:10000});
    let width = await  jHWPage.toolTip.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
    });
    console.log(width);
    await expect(width != "auto").toBeTruthy();
  });
  
