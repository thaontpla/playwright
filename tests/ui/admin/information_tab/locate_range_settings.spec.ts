import { expect, test } from "@core/fixtures";
import { LocateRangeSettingsPage } from "../../../../page/ui/admin/information_tab/locate_range_settings";
import { LoginAPI } from "@core/loginAPI";

test.describe("User should not fill duplicate value, zero value, or blank all field", () => {
  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const lRSPage = new LocateRangeSettingsPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await lRSPage.gotoLocateRangeSettings();
  });
  test("@Web check if it duplication value @TC_2461_1 ", async ({
    page,
    conf,
  }) => {
    const lRSPage = new LocateRangeSettingsPage(page, conf.suiteConf.domain);
        await lRSPage.adminMenu.click();
        await lRSPage.redMiles.click();
        await lRSPage.redMiles.press('Control+a');
        await lRSPage.redMiles.fill('');
        await lRSPage.yellowMiles.click();
        await lRSPage.yellowMiles.press('Control+a');
        await lRSPage.yellowMiles.fill('');
        await lRSPage.redMiles.type('4');
        await lRSPage.yellowMiles.type('4');
        await expect(lRSPage.duppleAnoun).toBeVisible();
  });
  test("@Web check only allow characters in number on the textfield @TC_2461_2 ", async ({
    page,
    conf,
  }) => {
    const lRSPage = new LocateRangeSettingsPage(page, conf.suiteConf.domain);
    await lRSPage.adminMenu.click();
    await lRSPage.yellowMiles.click();
    await lRSPage.yellowMiles.press('Control+a');
    await lRSPage.yellowMiles.fill('');
    await lRSPage.yellowMiles.type("test a quote");
    await lRSPage.saveBtn.click();
    await expect(lRSPage.invalidAnoun).toBeVisible();
  });
  test("@Web check if type 0 in the textfield @TC_2461_3 ", async ({
    page,
    conf,
  }) => {
    const lRSPage = new LocateRangeSettingsPage(page, conf.suiteConf.domain);
    await lRSPage.adminMenu.click();
    await lRSPage.yellowMiles.click();
    await lRSPage.yellowMiles.press('Control+a');
    await lRSPage.yellowMiles.fill('');
    await lRSPage.yellowMiles.type("0");
    await lRSPage.saveBtn.click();
    await expect(lRSPage.invalidAnoun).toBeVisible();
  });
  test("@Web Check if blank all of textfield @TC_2461_4 ", async ({
    page,
    conf,
  }) => {
    const lRSPage = new LocateRangeSettingsPage(page, conf.suiteConf.domain);
    await lRSPage.adminMenu.click();
    await lRSPage.yellowMiles.click();
    await lRSPage.yellowMiles.press('Control+a');
    await lRSPage.yellowMiles.fill('');
    await lRSPage.redMiles.click();
    await lRSPage.redMiles.press('Control+a');
    await lRSPage.redMiles.fill('');
    await lRSPage.saveBtn.click();
    await expect(lRSPage.invalidBlankAll).toBeVisible();
  });
});
