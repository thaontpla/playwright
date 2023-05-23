import { expect, test } from "@core/fixtures";
import { AttachmentCustomer } from "@api/customer/manage/attachment";
import { formatDate } from "@core/utils/datetime";
import { Login } from "@ui/login";
let idDoc: string;

test.describe("User should be able to find customer's expiring document", () => {
  test.afterEach(async ({ authRequest, conf }) => {
    const attachment = new AttachmentCustomer(conf.suiteConf.domain);
    await attachment.deleteDocument(authRequest, idDoc);
  });
  test("Customers whose documents expire today - 1 @TC_2530_1", async ({
    page,
    conf,
    authRequest,
  }) => {
    //Get date: today - 1
    const today_minus1 = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);

    await test.step("User upload file, documents expire today - 1", async () => {
      const attachment = new AttachmentCustomer(conf.suiteConf.domain);
      idDoc = await attachment.uploadFile(
        authRequest,
        conf.suiteConf.idCustomer,
        formatDate(today_minus1, "YYYY-MM-DD"),
        conf.suiteConf.note,
        conf.suiteConf.fileName
      );
    });

    await test.step("User login and navigate the Expiring document screen ", async () => {
      const login = new Login(page, conf.suiteConf.domainUI);
      await login.with(conf.suiteConf.username, conf.suiteConf.password);
      await page.goto(
        `https://${conf.suiteConf.domainUI}/customers/expiringdocuments`
      );
      //The uploaded file is not displayed because it has expired
      await expect(
        page.locator(
          `//span[contains(text(),'Customer Attachments')]/../../following-sibling::div/descendant::td[6]`
        )
      ).toContainText(formatDate(today_minus1, "MM/DD/YYYY"));
    });
  });

  test("Customers whose documents expire today @TC_2530_1", async ({
    page,
    conf,
    authRequest,
  }) => {
    //Get date: today
    const today = new Date(Date.now());

    await test.step("User upload file, documents expire today", async () => {
      const attachment = new AttachmentCustomer(conf.suiteConf.domain);
      idDoc = await attachment.uploadFile(
        authRequest,
        conf.suiteConf.idCustomer,
        formatDate(today, "YYYY-MM-DD"),
        conf.suiteConf.note,
        conf.suiteConf.fileName
      );
    });

    await test.step("User login and navigate the Expiring document screen ", async () => {
      const login = new Login(page, conf.suiteConf.domainUI);
      await login.with(conf.suiteConf.username, conf.suiteConf.password);
      await page.goto(
        `https://${conf.suiteConf.domainUI}/customers/expiringdocuments`
      );
      //The uploaded file is not displayed because it has expired
      await expect(
        page.locator(
          `//span[contains(text(),'Customer Attachments')]/../../following-sibling::div/descendant::td[6]`
        )
      ).toContainText(formatDate(today, "MM/DD/YYYY"));
    });
  });

  test("Customers whose documents expire today + 1 @TC_2530_1", async ({
    page,
    conf,
    authRequest,
  }) => {
    //Get date: today - 1
    const today_plus1 = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

    await test.step("User upload file, documents expire today - 1", async () => {
      const attachment = new AttachmentCustomer(conf.suiteConf.domain);
      idDoc = await attachment.uploadFile(
        authRequest,
        conf.suiteConf.idCustomer,
        formatDate(today_plus1, "YYYY-MM-DD"),
        conf.suiteConf.note,
        conf.suiteConf.fileName
      );
    });

    await test.step("User login and navigate the Expiring document screen ", async () => {
      const login = new Login(page, conf.suiteConf.domainUI);
      await login.with(conf.suiteConf.username, conf.suiteConf.password);
      await page.goto(
        `https://${conf.suiteConf.domainUI}/customers/expiringdocuments`
      );
      //The uploaded file is not displayed because it has expired
      await expect(
        page.locator(
          `//span[contains(text(),'Customer Attachments')]/../../following-sibling::div/descendant::td[6]`
        )
      ).toContainText(formatDate(today_plus1, "MM/DD/YYYY"));
    });
  });

  test("Customers whose documents expire today + 60 @TC_2530_1", async ({
    page,
    conf,
    authRequest,
  }) => {
    //Get date: today - 1
    const today_plus60 = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);

    await test.step("User upload file, documents expire today - 1", async () => {
      const attachment = new AttachmentCustomer(conf.suiteConf.domain);
      idDoc = await attachment.uploadFile(
        authRequest,
        conf.suiteConf.idCustomer,
        formatDate(today_plus60, "YYYY-MM-DD"),
        conf.suiteConf.note,
        conf.suiteConf.fileName
      );
    });

    await test.step("User login and navigate the Expiring document screen ", async () => {
      const login = new Login(page, conf.suiteConf.domainUI);
      await login.with(conf.suiteConf.username, conf.suiteConf.password);
      await page.goto(
        `https://${conf.suiteConf.domainUI}/customers/expiringdocuments`
      );
      //The uploaded file is not displayed because it has expired
      await expect(
        page.locator(
          `//span[contains(text(),'Customer Attachments')]/../../following-sibling::div/descendant::td[6]`
        )
      ).toContainText(formatDate(today_plus60, "MM/DD/YYYY"));
    });
  });

  test("Customers whose documents expire today + 61 @TC_2530_1", async ({
    page,
    conf,
    authRequest,
  }) => {
    //Get date: today - 1
    const today_plus61 = new Date(Date.now() + 61 * 24 * 60 * 60 * 1000);

    await test.step("User upload file, documents expire today - 1", async () => {
      const attachment = new AttachmentCustomer(conf.suiteConf.domain);
      idDoc = await attachment.uploadFile(
        authRequest,
        conf.suiteConf.idCustomer,
        formatDate(today_plus61, "YYYY-MM-DD"),
        conf.suiteConf.note,
        conf.suiteConf.fileName
      );
    });

    await test.step("User login and navigate the Expiring document screen ", async () => {
      const login = new Login(page, conf.suiteConf.domainUI);
      await login.with(conf.suiteConf.username, conf.suiteConf.password);
      await page.goto(
        `https://${conf.suiteConf.domainUI}/customers/expiringdocuments`
      );
      //The uploaded file is not displayed because it has expired
      await expect(
        page.locator(
          `//span[contains(text(),'Customer Attachments')]/../../following-sibling::div/descendant::td[6]`
        )
      ).toContainText(formatDate(today_plus61, "MM/DD/YYYY"));
    });
  });
});
