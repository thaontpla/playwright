import { expect, test } from "@core/fixtures";
import { BidderCheckboxStatus } from "../../../../page/ui/customer/bids_to_do/bidder_checkbox";
import { Login } from "@ui/login";
import { selectors } from "@playwright/test";




  test.beforeEach(async ({ page, conf,request }) => {
    const login = new Login(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);
    const bCSPage = new BidderCheckboxStatus(page, conf.suiteConf.domain);
    await bCSPage.gotoBidderCheckboxStatus();
     
  });
  test.only("@Web bidder checkbox should save checked status @TC_2672_1 ", async ({
    page,
    conf,
  }) => {
    const bCSPage = new BidderCheckboxStatus(page, conf.suiteConf.domain);
    await bCSPage.oneEmployee.click();
    await bCSPage.scheduleTab.click();
    await bCSPage.bidderCheckbox.click();
    let before = bCSPage.bidderCheckbox.isChecked();
    await bCSPage.attachmentsTab.click();
    await bCSPage.scheduleTab.click();
    let after = bCSPage.bidderCheckbox.isChecked();
    await expect(before != after).toBeTruthy();

});
 