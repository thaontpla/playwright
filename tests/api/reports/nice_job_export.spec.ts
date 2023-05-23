import { expect, test } from "@core/fixtures";
import { NiceJobExportsPage } from "../../../page/api/reports/nice_job_export";

 
  test("@Web click locator and job move to top  @TC_2609_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const nJEPage = new NiceJobExportsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await nJEPage.getToken(request); 
    const res = await request.get(`https://${nJEPage.maindomain}` + "/Report/customer-completed-nice-jobs", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + nJEPage.tokenLogin
            },
            params: {
                FromDate: "2022-07-31T17:00:00.000Z",
                ToDate: "2022-08-20T17:00:00.000Z"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
 
