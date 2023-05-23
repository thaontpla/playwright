import { expect, test } from "@core/fixtures";
import { LocatePage } from "../../../../page/api/customer/bids_to_do/locate";

  
 
  test("@Web click locator and job move to top  @TC_2465_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new LocatePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoDistances", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                date: "2022-08-21T17:00:00.000Z",
                jobId: "e4dce0a3-e052-4246-8e77-58981228a5e6"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        await expect(resjson["data"][0].jobId=="e4dce0a3-e052-4246-8e77-58981228a5e6").toBeTruthy();
    
  });
 
