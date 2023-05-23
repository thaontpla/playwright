import { expect, test } from "@core/fixtures";
import { DisplayDatelessBidsPage } from "../../../../page/api/customer/bids_to_do/display_dateless_bids";

  
  test("@Web Today's Follow Ups cardshould sort by date asc @TC_2671_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const dDBPage = new DisplayDatelessBidsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dDBPage.getToken(request); 
    const res = await request.get(`https://${dDBPage.maindomain}` + "/api/Dashboard/BidsToDoToDay", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + dDBPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24,
                sortBy: "companyName",
                sortType: "ASC"
            }

        }); //200,201,

        const resjson = await res.json();
        console.log(resjson);
        await expect(res.status()).toBe(200);
        let flag = true;
        for (let i = 0; i < resjson["data"].length -1; i++) {
            if( await dDBPage.sort(resjson["data"][i].companyName, resjson["data"][i+1].companyName) > 0) {
                console.log("#1111111");
                console.log("1111111:", resjson["data"][i].companyName);
                console.log("1111111:", resjson["data"][i+1].companyName);
              flag = false;
            }
 
         }
         if (flag == true){
            for (let i = 0; i < resjson["data"].length -1; i++) {
                if (resjson["data"][i].companyName == resjson["data"][i+1].companyName){
                   
                    if( await dDBPage.sortDate(resjson["data"][i].bidAppointmentDate, resjson["data"][i+1].bidAppointmentDate) == 0) {
                        console.log(" ");
                        console.log("Row:",i,resjson["data"][i].companyName, resjson["data"][i].bidAppointmentDate);
                        console.log("Row:",i+1,resjson["data"][i+1].companyName, resjson["data"][i+1].bidAppointmentDate);
                        flag = false;
                    }
                }
            }
        }
        await expect(flag).toBeTruthy();
       
  });
  