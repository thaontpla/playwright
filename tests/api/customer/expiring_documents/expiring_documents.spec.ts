import { expect, test } from "@core/fixtures";
import { ExpiringDocumentsAPIPage } from "../../../../page/api/customer/expiring_documents/expiring_documents";

  
  test("@Web go in the menu item and all the Employee Attachments to go on the screen. @TC_2529_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new ExpiringDocumentsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.get(`https://${eDPage.userdomain}` + "/Document/expiring-user-documents", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            PageNumber: 1,
            PageSize: 10
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
  test("@Web  go in the menu item and all the Customer Attachments to go on the screen. @TC_2529_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new ExpiringDocumentsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.get(`https://${eDPage.custdomain}` + "/Document/expiring-customer-documents", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            PageNumber: 1,
            PageSize: 10
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
  test("@Web  go in the menu item and all the Jobsite Address Attachments to go on the screen. @TC_2529_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new ExpiringDocumentsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.get(`https://${eDPage.custdomain}` + "/Document/expiring-customer-address-documents", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            PageNumber: 1,
            PageSize: 10
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
  test("@Web  go in the menu item and all the Job Attachments to go on the screen. @TC_2529_4 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new ExpiringDocumentsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.get(`https://${eDPage.custdomain}` + "/Document/expiring-job-documents", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            PageNumber: 1,
            PageSize: 10
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
 
  
 
