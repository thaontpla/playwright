import { expect, test } from "@core/fixtures";

test.describe("User should be able login", async () => {
  test("User have successfully login @TC_SB_CHE_PPP_10", async ({
    conf,
    page,
  }) => {
    await test.step("User input username and password", async () => {
      await page.goto(`https://${conf.suiteConf.domain}/sign-in`);
      await page.fill(`//input[@name='username']`, conf.suiteConf.username);
      await page.fill(`//input[@name='password']`, conf.suiteConf.password);
    });

    await test.step("User selects login now button", async () => {
      await page.click(`//span[contains(text(),'Sign in now')]`);
      await page.waitForNavigation({ waitUntil: "load" });
    });
    expect(page).toHaveURL(`https://${conf.suiteConf.domain}/dashboard`);
  });
});
