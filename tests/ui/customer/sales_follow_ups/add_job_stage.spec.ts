import { expect, test } from "@core/fixtures";
import { AddJobStagePage } from "../../../../page/ui/customer/sales_follow_ups/add_job_stage";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const aJTPage = new AddJobStagePage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await aJTPage.gotoAddJobStagePage();
  });
  test("@Web check if  have label 'Job Bid Stage:' @TC_2496_1 ", async ({
    page,
    conf,
  }) => {
    const aJTPage = new AddJobStagePage(page, conf.suiteConf.domain);
    await expect(aJTPage.Label.first()).toBeVisible();
  });
