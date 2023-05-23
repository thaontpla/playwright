import { expect, test } from "@core/fixtures";
import { NotesPage } from "../../../../page/ui/employees/today_route_screen/put_notes_accordion";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const nPage = new NotesPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await nPage.gotoNotesPage();
  });
  test("@Web check if Notes in to accordion @TC_2582_1 ", async ({
    page,
    conf,
  }) => {
    const nPage = new NotesPage(page, conf.suiteConf.domain);
    await nPage.datepicker.fill("2000-05-20");
    await page.waitForTimeout(10000);
    await nPage.datepicker.fill("08-05-2022");
    await page.waitForTimeout(10000);
    await nPage.selectEmployees.selectOption('78dd40c2-082e-41f7-a5c8-e4bd2584c163');
    await page.waitForTimeout(10000);
    await nPage.oneitem.click();
    await nPage.Notes.click();
    await expect(nPage.fieldInNotes).toBeVisible();
    await nPage.Notes.click();
    await expect(nPage.fieldInNotes).not.toBeVisible();
  });
 
 
