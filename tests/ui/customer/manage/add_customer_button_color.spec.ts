import { expect, test } from "@core/fixtures";
import { AddEmployeesColorPage } from "../../../../page/ui/customer/manage/add_customer_button_color.";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const aECPage = new AddEmployeesColorPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await aECPage.gotoAddEmployeesColorPage();
  });
  
  test("@Web The button color should be #43a047  @TC_2650_1 ", async ({
    page,
    conf,
  }) => {
    const aECPage = new AddEmployeesColorPage(page, conf.suiteConf.domain);
    let element = await aECPage.addBtn;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "rgb(67, 160, 71)").toBeTruthy();
  });
  test.only("@Web The hover button color should be #1b5e20  @TC_2650_2 ", async ({
    page,
    conf,
  }) => {
    const aECPage = new AddEmployeesColorPage(page, conf.suiteConf.domain);
    let element = await aECPage.addBtn;
    await element.hover({timeout:10000});
    
    let color = await element.evaluate((el) => {
        
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "rgb(27, 94, 32)").toBeTruthy();
    // await expect(color == "rgb(28, 96, 33)").toBeTruthy();
  });
  
