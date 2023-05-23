import { expect, test } from "@core/fixtures";
import { DefaultSortOrderAPIPage } from "../../../../page/api/customer/sales_follow_ups/default_sort_order";

  
  test.only("@Web Past Due Follow Ups should sort by date then customer name then job city then job address @TC_2589_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const dSOPage = new DefaultSortOrderAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dSOPage.getToken(request); 
    const res = await request.get(`https://${dSOPage.maindomain}` + "/Job/FollowUpContactPastDue", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + dSOPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        console.log("resjson:",resjson["data"].length);
        let flag = true;
        for (let i = 0; i < resjson["data"].length -1; i++) {
            // console.log("i",i,":",await dSOPage.sort(resjson["data"][i].followUpDate, resjson["data"][i+1].followUpDate));
            console.log("i",i,":",await resjson["data"][i].followUpDate);
            if( await dSOPage.sort(resjson["data"][i].followUpDate, resjson["data"][i+1].followUpDate) > 0) {
              flag = false;
            }
         }
         if (flag == true){
             for (let i = 0; i < resjson["data"].length -1; i++) {
                 if (resjson["data"][i].followUpDate == resjson["data"][i+1].followUpDate){
                     if( await dSOPage.sort(resjson["data"][i].companyName, resjson["data"][i+1].companyName) > 0) {
                        console.log("#2222222");
                        console.log("2222222:", resjson["data"][i].companyName);
                        console.log("2222222:", resjson["data"][i+1].companyName);
                         flag = false;
                     }else if(await dSOPage.sort(resjson["data"][i].companyName, resjson["data"][i+1].companyName) == 0){
                         if( await dSOPage.sort(resjson["data"][i].city, resjson["data"][i+1].city) > 0) {
                            console.log("#33333");
                            console.log("33333:", resjson["data"][i].city);
                            console.log("33333:", resjson["data"][i+1].city);
                            flag = false;
                          }else if(await dSOPage.sort(resjson["data"][i].city, resjson["data"][i+1].city) == 0){
                             if( await dSOPage.sort(resjson["data"][i].address1, resjson["data"][i+1].address1) > 0) {
                                console.log("#33333");
                                console.log("33333:", resjson["data"][i].city);
                                console.log("33333:", resjson["data"][i+1].city);;
                                 flag = false;
                              }
                          }
                     }
 
                 }
             }
         }
        await expect(flag).toBeTruthy();
  });
  test("@Web Upcoming Follow Ups cards should sort by date then customer name then job city then job address @TC_2589_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const dSOPage = new DefaultSortOrderAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dSOPage.getToken(request); 
    const res = await request.get(`https://${dSOPage.maindomain}` + "/Job/FollowUpContactUpcoming", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + dSOPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        let flag = true;
        for (let i = 0; i < resjson["data"].length -1; i++) {
            console.log("i",i,":",await resjson["data"][i].followUpDate);
            if( await dSOPage.sort(resjson["data"][i].followUpDate, resjson["data"][i+1].followUpDate) > 0) {
              flag = false;
            }
 
         }
         if (flag == true){
            console.log("1111111");
             for (let i = 0; i < resjson["data"].length -1; i++) {
                 if (resjson["data"][i].followUpDate == resjson["data"][i+1].followUpDate){
                    console.log("2222222");
                     if( await dSOPage.sort(resjson["data"][i].companyName, resjson["data"][i+1].companyName) > 0) {
                         flag = false;
                     }else if(await dSOPage.sort(resjson["data"][i].companyName, resjson["data"][i+1].companyName) == 0){
                        console.log("3333333333");
                         if( await dSOPage.sort(resjson["data"][i].city, resjson["data"][i+1].city) > 0) {
                           flag = false;
                          }else if(await dSOPage.sort(resjson["data"][i].city, resjson["data"][i+1].city) == 0){
                             if( await dSOPage.sort(resjson["data"][i].address1, resjson["data"][i+1].address1) > 0) {
                                 flag = false;
                              }
                          }
                     }
 
                 }
             }
         }
        await expect(flag).toBeTruthy();
       
  });
  test("@Web Today's Follow Ups cardshould sort by date then customer name then job city then job address @TC_2589_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const dSOPage = new DefaultSortOrderAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dSOPage.getToken(request); 
    const res = await request.get(`https://${dSOPage.maindomain}` + "/Job/FollowUpContactToday", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + dSOPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        let flag = true;
        for (let i = 0; i < resjson["data"].length -1; i++) {
            if( await dSOPage.sort(resjson["data"][i].companyName, resjson["data"][i+1].companyName) > 0) {
              flag = false;
            }
 
         }
         if (flag == true){
             for (let i = 0; i < resjson["data"].length -1; i++) {
                 if (resjson["data"][i].companyName == resjson["data"][i+1].companyName){
                     if( await dSOPage.sort(resjson["data"][i].city, resjson["data"][i+1].city) > 0) {
                         flag = false;
                     }else if(await dSOPage.sort(resjson["data"][i].city, resjson["data"][i+1].city) == 0){
                         if( await dSOPage.sort(resjson["data"][i].address1, resjson["data"][i+1].address1) > 0) {
                           flag = false;
                         }
                     }
 
                 }
             }
         }
        await expect(flag).toBeTruthy();
       
  });
  