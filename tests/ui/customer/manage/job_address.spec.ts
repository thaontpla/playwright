import { expect, test } from "@core/fixtures";
import { ManagePage } from "../../../../page/ui/customer/manage/manage";
import { Login } from "@ui/login";

test.describe("User should be able set job address of the customer", () => {
  test.beforeEach(async ({ page, conf }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const manage = new ManagePage(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);
    await manage.gotoJobAddresses();
  });
  test("User are adding Jobsite Address level attachments @TC_2509_1 ", async ({
    page,
    conf,
  }) => {
    const manage = new ManagePage(page, conf.suiteConf.domain);

    await test.step("User attachment file in job addresses tab", async () => {
      await page.click(
        `(//div[contains(@class,'MuiPaper-root')]/descendant::span[contains(text(),'Attachments')])[1]`
      );
      await manage.uploadAttachments(
        conf.suiteConf.file.path0,
        conf.suiteConf.file.path1,
        conf.suiteConf.note,
        conf.suiteConf.expiration_date
      );
      await expect(
        page.locator(`//span[contains(text(),'Add files')]`)
      ).toBeVisible();
      await expect(
        page.locator(
          `//span[contains(text(),'Add files')]/../../preceding-sibling::button/descendant::span[contains(text(),'Close')]`
        )
      ).toBeVisible();
    });
    // const rowBefore = await page
    //   .locator(`//tbody/tr[@class='MuiTableRow-root']`)
    //   .count();

    await test.step("User choose add file", async () => {
      await page.click(`//span[contains(text(),'Add files')]`);
      await expect(
        page.locator(`//h6[contains(text(),'Add files successfully.')]`)
      ).toBeVisible();
      // const rowAfter = await page.locator(`//tbody/tr`).count();
      // expect(rowBefore + 1).toBe(rowAfter);
    });
  });

  test("test connect data base @TC_2509_2", async ({}) => {
    await test.step("Log in", async () => {
      const { DB } = require("../../../../src/core/utils/database");
      const db = new DB();
      await db.connectDb("delete from CustomerAddressDocument where CustomerId='08da10f9-cf66-4ed2-8ef5-15f547f1e9e9");
      debugger
    });
  });
});
