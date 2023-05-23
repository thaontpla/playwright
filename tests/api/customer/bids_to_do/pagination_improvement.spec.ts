import { expect, test } from "@core/fixtures";
import { PaginationImprovementPage } from "../../../../page/api/customer/bids_to_do/pagination_improvement";

  test("@Webthe Bids ToDo panigation should load only one page of each card at a time @TC_2560_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new PaginationImprovementPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res2 = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDo", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                Limit: 10,
                PageSize: 10,
                PageNumber: 1,
                Date: "2022-08-01"
            }
        }); //200,201,

        const resjson2 = await res2.json();
        await expect(res2.status()).toBe(200);
  });

  
 
