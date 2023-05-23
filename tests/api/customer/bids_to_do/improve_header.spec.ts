import { expect, test } from "@core/fixtures";
import { ImproveHeaderPage } from "../../../../page/api/customer/bids_to_do/improve_header";

  
  test("@Web  Stack sort order radio buttons to save space @TC_2595_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new ImproveHeaderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoToDay", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType:"desc",
                date: "2022-08-21T17:00:00.000Z"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
    const res1 = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoUpcoming", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType:"desc",
                date: "2022-08-21T17:00:00.000Z"
                
            }

        }); //200,201,

        const resjson1 = await res1.json();
        await expect(res1.status()).toBe(200);
    const res2 = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoPastDue", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType:"desc",
                date: "2022-08-21T17:00:00.000Z"
            }

        }); //200,201,

        const resjson2 = await res2.json();
        await expect(res2.status()).toBe(200);
  });
  test("@Web dropdown Filter by Bidder should work @TC_2595_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new ImproveHeaderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoToDay", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType:"desc",
                date: "2022-08-21T17:00:00.000Z",
                employeeId: "f4c04a13-1745-41c2-bd65-8b0e02571378"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
    const res1 = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoUpcoming", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType:"desc",
                date: "2022-08-21T17:00:00.000Z",
                employeeId: "f4c04a13-1745-41c2-bd65-8b0e02571378"
                
            }

        }); //200,201,

        const resjson1 = await res1.json();
        await expect(res1.status()).toBe(200);
    const res2 = await request.get(`https://${pIPage.maindomain}` + "/api/Dashboard/BidsToDoPastDue", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                limit: 0,
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType:"desc",
                date: "2022-08-21T17:00:00.000Z",
                employeeId: "f4c04a13-1745-41c2-bd65-8b0e02571378"
            }

        }); //200,201,

        const resjson2 = await res2.json();
        await expect(res2.status()).toBe(200);
  });
  test("@Web dropdown save multi job for users  @TC_2595_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new ImproveHeaderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.post(`https://${pIPage.maindomain}` + "/Job/BidSchedule/Save", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            data: {
                "jobIds":[
                    "4d4e6aa9-a79d-4439-b8d6-c0d6ba672183",
                    "88523822-e432-4b96-b89b-cc2ed0bf5971"
                 ],
                "employeeId":"f4c04a13-1745-41c2-bd65-8b0e02571378"
             }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
    
  });
  test("@Web dropdown save single job for users  @TC_2595_4 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new ImproveHeaderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.post(`https://${pIPage.maindomain}` + "/Job/BidSchedule/Save", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            data: {
                "jobIds":[
                   "e4dce0a3-e052-4246-8e77-58981228a5e6"
                ],
                "employeeId":"a017d8ea-df45-4b69-b903-dea3d162f646"
             }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
    
  });
 
