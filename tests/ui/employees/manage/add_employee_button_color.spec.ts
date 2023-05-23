import { expect, test } from "@core/fixtures";
import { AddEmployeesColorPage } from "../../../../page/ui/employees/manage/add_employee_button_color";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const aECPage = new AddEmployeesColorPage(page, conf.suiteConf.domain);
    const login = new Login(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);

    await aECPage.gotoAddEmployeesColorPage();
  });
  
  test("@Web The button color should be #43a047  @TC_2649_1 ", async ({
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
  test.only("@Web The hover button color should be #1b5e20  @TC_2649_2 ", async ({
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
    // await expect(color == "rgb(28, 96, 33)").toBeTruthy();
    await expect(color == "rgb(27, 94, 32)").toBeTruthy();
  });
  
