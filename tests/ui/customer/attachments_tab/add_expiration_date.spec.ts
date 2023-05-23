import { expect, test } from "@core/fixtures";
import { AddExpirationDatePage } from "../../../../page/ui/customer/attachments_tab/add_expiration_date";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await aEDPage.gotoAddExpirationDatePage();
  });
  test("@Web check if DateExpiration Date is exist @TC_2527_1 ", async ({
    page,
    conf,
  }) => {
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
    await aEDPage.addAttachmentsBtn.click();

    await expect(aEDPage.inputExpirationDate).toBeVisible();
  });
  test("@Web check if can date picker work well @TC_2527_2 ", async ({
    page,
    conf,
  }) => {
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
        await aEDPage.checkDateExpirationExist();
        await aEDPage.calanderBtn.click();
        await aEDPage.calanderOneDay.click();
        await aEDPage.calanderOKBtn.click();
  });
  test.only("@Web check if upload file successfully @TC_2527_3 ", async ({
    page,
    conf,
  }) => {
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
        await aEDPage.checkDatePicker();
        aEDPage.page.on("filechooser", async(filechooser) => {
            await filechooser.setFiles(aEDPage.imageExamplePath);
        })
        await aEDPage.page.click("svg.MuiSvgIcon-root.MuiDropzoneArea-icon", { force: true });
        await aEDPage.inputFiles.click();
        await aEDPage.uploadFilesBtn.click();
        await expect(aEDPage.successMessage).toBeVisible();
  });
  test("@Webcheck if expried day is exist for expiration Dat @TC_2527_4 ", async ({
    page,
    conf,
  }) => {
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
        await aEDPage.checkUpload();
        await expect(aEDPage.gridname.last()).toContainText("- Expired");
  });
  
  
