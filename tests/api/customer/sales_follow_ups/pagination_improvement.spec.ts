import { expect, test } from "@core/fixtures";
import { PaginationImprovementAPIPage } from "../../../../page/api/customer/sales_follow_ups/pagination_improvement";

  
  test("@Web Today's Follow Ups should have panigation @TC_2561_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new PaginationImprovementAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/Job/FollowUpContactToday", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
  test("@Web Past Due Follow Ups should have panigation @TC_2561_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new PaginationImprovementAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/Job/FollowUpContactPastDue", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
  test("@Web Upcoming Follow Ups should have panigation @TC_2561_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new PaginationImprovementAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/Job/FollowUpContactUpcoming", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
