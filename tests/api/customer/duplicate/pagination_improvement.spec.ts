import { expect, test } from "@core/fixtures";
import { PaginationImprovementAPIPage } from "../../../../page/api/customer/duplicate/pagination_improvement";

  
  test("@Web the panigation should load only one page of each card at a time @TC_2564_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new PaginationImprovementAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.custdomain}` + "/list-duplicate", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                PageNumber: 100000000,
                PageSize: 10
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
 