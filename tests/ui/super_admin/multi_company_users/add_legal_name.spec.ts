import { expect, test } from "@core/fixtures";
import { AddLegalNamePage } from "../../../../page/ui/super_admin/multi_company_users/add_legal_name";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const aLNPage = new AddLegalNamePage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await aLNPage.gotoAddLegalNamePage();
  });
  test("@Web Check if lagel addtion name for the case they have same name @TC_2514_1 ", async ({
    page,
    conf,
  }) => {
    const aLNPage = new AddLegalNamePage(page, conf.suiteConf.domain);
    await expect(aLNPage.oneitem).toBeVisible();
    const rows = await aLNPage.leftList;
    let temps = [];
    for (let i = 0; i < await rows.count(); i++) {
        temps[i] = await rows.nth(i).textContent();

    }
    let a = new Set(temps);
    await expect(a.size < temps.length).toBeFalsy();
  });
  test("@Web when click the left arow the companies name must move to selected companies @TC_2514_2 ", async ({
    page,
    conf,
  }) => {
    const aLNPage = new AddLegalNamePage(page, conf.suiteConf.domain);
    await expect(aLNPage.oneitem).toBeVisible();
    const row1s = await aLNPage.leftList;

    let arrLeft = [];
    for (let i = 0; i < await row1s.count(); i++) {
        arrLeft[i] = await row1s.nth(i).textContent();
    }

    await row1s.nth(0).click();
    await aLNPage.leftSingleArow.first().click();
    const row2s = await aLNPage.rightList;

    let arrRight = [];
    for (let i = 0; i < await row2s.count(); i++) {
        arrRight[i] = await row2s.nth(i).textContent();
    }
    await expect(arrRight[0] == arrLeft[0]).toBeTruthy();
  });
  test("@Web when click the left all arow, all companies name must move to selected companies  @TC_2514_3 ", async ({
    page,
    conf,
  }) => {
    const aLNPage = new AddLegalNamePage(page, conf.suiteConf.domain);
    await expect(aLNPage.oneitem).toBeVisible();
    // get array of left list
        const row1s = await aLNPage.leftList;
        let arrLeft = [];
        for (let i = 0; i < await row1s.count(); i++) {
            arrLeft[i] = await row1s.nth(i).textContent();
        }

    // click left All arow
        await aLNPage.leftAllArow.click();

    //get array of right list
        const row2s = await aLNPage.rightList;
        let arrRight = [];
        for (let i = 0; i < await row2s.count(); i++) {
            arrRight[i] = await row2s.nth(i).textContent();
        }
    
    //remove all null value in left list
        let arrLeftRemoveNullValue = arrLeft.filter(function(el) {
            return el != null && el != "";
        });

        console.log("L:", arrLeftRemoveNullValue.length);
        console.log("R:", arrRight.length);
    
    //if all name in left list is equal to right list then return true
        let success = (arrLeftRemoveNullValue.length === arrRight.length &&
            arrLeftRemoveNullValue.every(function(value, index) {
                return value === arrRight[index]
            }))

        expect(success).toBeTruthy();
  });
  test("@Web when all name move to right, the leftall arow is disable @TC_2514_4 ", async ({
    page,
    conf,
  }) => {
    const aLNPage = new AddLegalNamePage(page, conf.suiteConf.domain);
    await expect(aLNPage.oneitem).toBeVisible();
    aLNPage.leftAllArow.click();
    await expect(aLNPage.leftAllArow).toBeDisabled;
  });
  test.only("@Web when the name move to right, the left arow is disable @TC_2514_5 ", async ({
    page,
    conf,
  }) => {
    const aLNPage = new AddLegalNamePage(page, conf.suiteConf.domain);
    await expect(aLNPage.oneitem).toBeVisible();
    const row1s = await aLNPage.leftList;
    let temp = row1s.nth(0).textContent()
    row1s.nth(0).click();
    aLNPage.leftSingleArow.first().click();
    await expect(aLNPage.leftSingleArow).toBeDisabled;

  });

  
  
