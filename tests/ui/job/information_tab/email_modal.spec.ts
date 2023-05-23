import { expect, test } from "@core/fixtures";
import { EmailModal } from "../../../../page/ui/job/information_tab/email_modal";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const eMPage = new EmailModal(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await eMPage.gotoEmailModal();
  });
  test("@Web check if add Email and BCC Email fields like bubbles button @TC_2494_1 ", async ({
    page,
    conf,
  }) => {
    const eMPage = new EmailModal(page, conf.suiteConf.domain);
    await eMPage.onejobrow.first().click();
    await eMPage.QuoteInvoice.click();
    await eMPage.CustEmailField.click();
    await eMPage.CustEmailField.fill("tuu@gmail.com");
    await page.keyboard.press('Enter');
    await expect(eMPage.newbubbles).toBeVisible();
    await eMPage.BCCEmailField.click();
    await eMPage.BCCEmailField.fill("tuuBCC@gmail.com");
    await page.keyboard.press('Enter');
    await expect(eMPage.newBCCbubbles).toBeVisible();
  });
  test("@Web check if Don't allow the bubble to form if the email isn't in a valid email format @TC_2494_2 ", async ({
    page,
    conf,
  }) => {
    const eMPage = new EmailModal(page, conf.suiteConf.domain);
    await eMPage.onejobrow.first().click();
    await eMPage.QuoteInvoice.click();
    await eMPage.BCCEmailField.click();
    await eMPage.BCCEmailField.fill("tuuBCC@gmail.com");
    await page.keyboard.press('Enter');
    await expect(eMPage.newBCCbubbles).toBeVisible();
    await eMPage.validbubblesBCC.click();
    await eMPage.validbubblesBCC.fill("tuuinvalid@gmail");
    await page.keyboard.press('Enter');
    await expect(eMPage.newinvalidbubbles).not.toBeVisible();
  });
  test("@Web check if Don't allow by semicolon (;) @TC_2494_2 ", async ({
    page,
    conf,
  }) => {
    const eMPage = new EmailModal(page, conf.suiteConf.domain);
    await eMPage.onejobrow.first().click();
    await eMPage.QuoteInvoice.click();
    await eMPage.BCCEmailField.click();
    await eMPage.BCCEmailField.fill("tuuBCC@gmail.com ;");
    await page.keyboard.press('Enter');
    await expect(eMPage.newBCCbubbles).not.toBeVisible();
  });
  
