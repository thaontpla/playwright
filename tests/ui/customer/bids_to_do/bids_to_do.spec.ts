import { BidsToDoAPI } from "@api/customer/bids_to_do/bids_to_do";
import { expect, test } from "@core/fixtures";
import { formatDate } from "@core/utils/datetime";
import { BidsToDo } from "@ui/customer/bids_to_do/bids_to_do";
import { Login } from "@ui/login";
let accessToken: string;
let idBidToday: string;
let idBidTomorrow: string;

test.describe("User should be able need to know who is assigned to go to each bid", () => {
  test.beforeAll(async ({ conf, authRequest }) => {
    const now = new Date(Date.now());
    const nowPlus = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
    const today = formatDate(now, "YYYY-MM-DD");
    const tomorrow = formatDate(nowPlus, "YYYY-MM-DD");
    const bidsToDoAPI = new BidsToDoAPI(conf.suiteConf.domain_api, authRequest);
    idBidToday = await bidsToDoAPI.addJobTodayBids(authRequest, today, today);
    idBidTomorrow = await bidsToDoAPI.addJobTodayBids(
      authRequest,
      tomorrow,
      tomorrow
    );
  });
  test.beforeEach(async ({ page, conf }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const bidtodo = new BidsToDo(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);
    await bidtodo.gotoBidsToDo();
  });

  test.afterAll(async ({ conf, authRequest }) => {
    const bidsToDoAPI = new BidsToDoAPI(conf.suiteConf.domain_api, authRequest);
    await bidsToDoAPI.deleteJobBid(authRequest, idBidToday, accessToken);
    await bidsToDoAPI.deleteJobBid(authRequest, idBidTomorrow, accessToken);
  });

  test("The user can filter at the top for the display only bids assigned to the selected user @TC_2493_1", async ({
    page,
    token,
    conf,
  }) => {
    await page.selectOption(
      `//label[contains(text(),'Filter by Bidder')]/following-sibling::div/descendant::select`,
      { label: "Su Bui" }
    );
    await expect(
      page.locator(
        `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`
      )
    ).toHaveValue("d92025e8-c267-45ef-a4b2-1959e3485d98");
  });
  test("The user can assign bidder and change bidder with only line item @TC_2493_1", async ({
    page,
  }) => {
    await test.step("User assign bidder with the line item", async () => {
      await page.selectOption(
        `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`,
        "b0ab5957-6b46-4d53-9589-9d3b07a0f873"
      );
      await page.waitForSelector(`//div[@role='progressbar']`, {
        state: "hidden",
      });
      await expect(
        page.locator(
          `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`
        )
      ).toHaveValue("b0ab5957-6b46-4d53-9589-9d3b07a0f873");
    });
    await test.step("User change bidder with the line item", async () => {
      await page.selectOption(
        `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`,
        { label: "Su Bui" }
      );
      await expect(
        page.locator(
          `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`
        )
      ).toHaveValue("d92025e8-c267-45ef-a4b2-1959e3485d98");
    });
  });

  test("The user can assign bidder with multiple line item @TC_2493_1", async ({
    page,
  }) => {
    await test.step("User assign bidder with multiple line item ", async () => {
      debugger;
      await page.click(`(//input[@type='checkbox'])[1]`);
      await page.click(
        `(//span[contains(text(),'Upcoming Bids')]/../../../descendant::input)[1]`
      );
      debugger;
      await page.selectOption(
        `//label[contains(text(),'Assign Bidder')]/following-sibling::div/descendant::select`,
        "d92025e8-c267-45ef-a4b2-1959e3485d98"
      );
      await page.waitForSelector(`//div[@role='progressbar']`, {
        state: "hidden",
      });
      await expect(
        page.locator(`//h6[contains(text(),'Save successfully!')]`)
      ).toBeVisible();
      await expect(
        page.locator(
          `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`
        )
      ).toHaveValue("d92025e8-c267-45ef-a4b2-1959e3485d98");
      await expect(
        page.locator(
          `(//span[contains(text(),'Upcoming Bids')]/../../../descendant::select)[1]`
        )
      ).toHaveValue("d92025e8-c267-45ef-a4b2-1959e3485d98");
    });
  });

  test("The user can change bidder with multiple line item @TC_2493_1", async ({
    page,
  }) => {
    await test.step("User change bidder with multiple line item", async () => {
      await page.reload();
      await page.waitForLoadState();
      await page.click(`(//input[@type='checkbox'])[1]`);
      debugger;
      await page.click(
        `(//span[contains(text(),'Upcoming Bids')]/../../../descendant::input)[1]`
      );
      await page.selectOption(
        `//label[contains(text(),'Assign Bidder')]/following-sibling::div/descendant::select`,
        "b0ab5957-6b46-4d53-9589-9d3b07a0f873"
      );
      await expect(
        page.locator(`//h6[contains(text(),'Save successfully!')]`)
      ).toBeVisible();
      await expect(
        page.locator(
          `(//label[contains(text(),'Assigned Bidder')])[1]/following-sibling::div/descendant::select`
        )
      ).toHaveValue("b0ab5957-6b46-4d53-9589-9d3b07a0f873");
      await expect(
        page.locator(
          `(//span[contains(text(),'Upcoming Bids')]/../../../descendant::select)[1]`
        )
      ).toHaveValue("b0ab5957-6b46-4d53-9589-9d3b07a0f873");
    });
  });
});
