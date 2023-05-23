import { expect, test } from "@core/fixtures";
import { DateText } from "../../../page/ui/Schedules/date_text";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const dTPage = new DateText(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await dTPage.gotoDateText();
  });
  test("@Web check if date time text display in 1 line on PC scree @TC_2519_1 ", async ({
    page,
    conf,
  }) => {
    const dTPage = new DateText(page, conf.suiteConf.domain);
    await dTPage.checkDateTimeText();
    console.log("bbb:",dTPage.boxwitdh);
    await expect(dTPage.boxwitdh >= 90).toBeTruthy();
  });
  
