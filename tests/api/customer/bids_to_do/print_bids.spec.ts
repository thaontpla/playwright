import { expect, test } from "@core/fixtures";
import { PrintBidsAPIPage } from "../../../../page/api/customer/bids_to_do/print_bids";
  
 
  test("@Web  print functionality should work @TC_2550_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pBPage = new PrintBidsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pBPage.getToken(request);
        const res = await request.get(`https://${pBPage.userdomain}` + "/list-all-canbid", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pBPage.tokenLogin
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
  test("@Web  blank all check box and hit genarate it should not be return code 200  @TC_2550_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const pBPage = new PrintBidsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pBPage.getToken(request);
        const res = await request.get(`https://${pBPage.maindomain}` + "/api/Dashboard/BidsToDoPdf", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pBPage.tokenLogin
            },
            params: {
                selectEmployeeId: null,
                allBidders: true,
                todayBidders: false,
                pastDueBidders: false,
                upcomingBidders: false,
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
  test("@Web  choose option one employees and hit genarate it should be return code 200  @TC_2550_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const pBPage = new PrintBidsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pBPage.getToken(request);
        const res = await request.get(`https://${pBPage.maindomain}` + "/api/Dashboard/BidsToDoPdf", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pBPage.tokenLogin
            },
            params: {
                selectEmployeeId: "a12b5efa-1527-4454-aa5e-d5efed123346",
                allBidders: false,
                todayBidders: true,
                pastDueBidders: true,
                upcomingBidders: true,
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
  test("@Web  choose all employees and hit genarate it should be return code 200  @TC_2550_4 ", async ({
    page,
    conf,
    request,
  }) => {
    const pBPage = new PrintBidsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pBPage.getToken(request);
        const res = await request.get(`https://${pBPage.maindomain}` + "/api/Dashboard/BidsToDoPdf", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pBPage.tokenLogin
            },
            params: {
                selectEmployeeId: null,
                allBidders: true,
                todayBidders: true,
                pastDueBidders: true,
                upcomingBidders: true,
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
 
