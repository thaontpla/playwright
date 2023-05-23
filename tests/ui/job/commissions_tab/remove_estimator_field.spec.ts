import { expect, test } from "@core/fixtures";
import { RemoveEstimatorField } from "../../../../page/ui/job/commissions_tab/remove_estimator_field";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const rEFPage = new RemoveEstimatorField(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await rEFPage.gotoRemoveEstimatorField();
  });
  test("@Web the Estimator field must be removed @TC_2597_1 ", async ({
    page,
    conf,
  }) => {
    const rEFPage = new RemoveEstimatorField(page, conf.suiteConf.domain);
    await rEFPage.oneitem.first().click();
    await rEFPage.commissionTab.click();
    await expect(rEFPage.Estimator).not.toBeVisible();
  });
 
