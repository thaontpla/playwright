import { expect, test } from "@core/fixtures";
import { AddbiderAsSalesPage } from "../../../../page/api/job/commission_tab/add_bidder_as_salesperson";

  
 
  test("@Web the bider after assign will be in salesperson list @TC_2621_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const jAEDPage = new AddbiderAsSalesPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await jAEDPage.getToken(request); 
    const res = await request.post(`https://${jAEDPage.maindomain}` + "/Job/BidSchedule/Save", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + jAEDPage.tokenLogin
            },
            data: {
            "jobIds":["1aa057d2-41ab-4ea5-aaf7-eb13cc6e9e09"],
            "employeeId":"32a54a63-99c5-457d-b805-4068b1181b08"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);

        const res2 = await request.get(`https://${jAEDPage.maindomain}` + "/Job/salesperson", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + jAEDPage.tokenLogin
            },
            params: {
            "jobId":"1aa057d2-41ab-4ea5-aaf7-eb13cc6e9e09"
            }

        }); //200,201,

        const resjson2 = await res2.json();
        await expect(res2.status()).toBe(200);
        console.log(resjson2);
        await expect(resjson2).toContain("32a54a63-99c5-457d-b805-4068b1181b08");
      
  });
  test.only("@Web the user assigns a bidder in Bids To Do should be added  to the Sales Commission Pay Assignment card @TC_2621_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const jAEDPage = new AddbiderAsSalesPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await jAEDPage.getToken(request); 
    const res = await request.post(`https://${jAEDPage.maindomain}` + "/Job/BidSchedule/Save", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + jAEDPage.tokenLogin
            },
            data: {
            "jobIds":["1aa057d2-41ab-4ea5-aaf7-eb13cc6e9e09"],
            "employeeId":"32a54a63-99c5-457d-b805-4068b1181b08"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);

        const res2 = await request.get(`https://${jAEDPage.maindomain}` + "/Commission/JobCommissionSales/List", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + jAEDPage.tokenLogin
            },
            params: {
            "jobSplitId":"1aa057d2-41ab-4ea5-aaf7-eb13cc6e9e09"
            }

        }); //200,201,
    
        const resjson2 = await res2.json();
        await expect(res2.status()).toBe(200);
        console.log(resjson2);
        let check = jAEDPage.check_arr('32a54a63-99c5-457d-b805-4068b1181b08',resjson2)
        await expect(check).toBeTruthy();
      
  });
  
 
