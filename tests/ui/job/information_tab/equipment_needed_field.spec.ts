import { expect, test } from "@core/fixtures";
import { EquipmentNeededPage } from "../../../../page/ui/job/information_tab/equipment_needed_field";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const eMPage = new EquipmentNeededPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await eMPage.gotoEquipmentNeededPage();
  });

  test("@Web check if Don't allow by semicolon (;) @TC_2656_1 ", async ({
    page,
    conf,
  }) => {
    const eMPage = new EquipmentNeededPage(page, conf.suiteConf.domain);
    await eMPage.oneJobRow.first().click();
    await eMPage.informationTab.click();
    await eMPage.equipmentField.click();
    await eMPage.equipmentField.fill("abc");
    await page.keyboard.press('Enter');
    await expect(eMPage.abcEquipmentField).toBeVisible();
    await eMPage.abcEquipmentField.click();
    await eMPage.abcEquipmentField.fill(";");
    await page.keyboard.press('Enter');
    await expect(eMPage.abcEquipmentField).toBeVisible();
  });
  
