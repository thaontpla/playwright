import { expect, test } from "@core/fixtures";
import { FeatureFlagPage  } from "../../../../page/ui/customer/bids_to_do/feature_flag";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const fFPage = new FeatureFlagPage (page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    
  });
  test("@Web  clicks Locate on route button should sorts that job to the top along with all nearest jobs to farthest @TC_2617_1 ", async ({
    page,
    conf,
  }) => {
    
    const fFPage = new FeatureFlagPage (page, conf.suiteConf.domain);
    await fFPage.gotoBidsTodo();
    await fFPage.locateBtn.first().click();
    await expect(fFPage.sortByDropdownOptionDistance).toHaveAttribute("disabled","");
   
});
  test("@Web  checkbox to Employee/Schedule tab for “Bidder” should be added @TC_2617_2 ", async ({
    page,
    conf,
  }) => {
    const fFPage = new FeatureFlagPage (page, conf.suiteConf.domain);
    await fFPage.gotoEmployeesSchedule();
    await fFPage.bidderCheckbox.click();
    let before = fFPage.bidderCheckbox.isChecked();
    await fFPage.bidderCheckbox.click();
    let after = fFPage.bidderCheckbox.isChecked();
    await expect(before != after).toBeTruthy();
   
});
  test("@Web  dropdown with the employees doing bids as a filter at the top should be added @TC_2617_3 ", async ({
    page,
    conf,
  }) => {
    const fFPage = new FeatureFlagPage (page, conf.suiteConf.domain);
    await fFPage.gotoBidsTodo();
    await expect(fFPage.dropdownBidersFilterTop).toBeVisible();
   
});
  test("@Web  radio button to each bid to assign employees to bid should be added @TC_2617_4 ", async ({
    page,
    conf,
  }) => {
    const fFPage = new FeatureFlagPage (page, conf.suiteConf.domain);
    await fFPage.gotoBidsTodo();
    await fFPage.bidderRadio.first().click();
    
    await fFPage.dropdownAssignedBidder.selectOption('32a54a63-99c5-457d-b805-4068b1181b08');
    await expect(fFPage.successMessage).toBeVisible();
   
});