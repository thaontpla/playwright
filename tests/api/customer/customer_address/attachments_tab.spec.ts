import { expect, test } from "@core/fixtures";
import { AttachmentsTabAPIPage } from "../../../../page/api/customer/customer_address/attachments_tab";

  
  test("@Web Get all  Customer Attachments  function must work well. @TC_2500_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const aTPage = new AttachmentsTabAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await aTPage.getToken(request); 
    const res = await request.get(`https://${aTPage.custdomain}` + "/Document/list-customeraddress-document", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + aTPage.tokenLogin
        },
        params: {
            AddressId: "00b2ba86-a1bb-4747-a068-3fe61249bb08"
        }

    }); //200,201,

    const resjson = await res.json();
    console.log(resjson);
    await expect(res.status()).toBe(200);
       
  });
  test("@Web Delete one Customer Attachments  function must work well. @TC_2500_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const aTPage = new AttachmentsTabAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await aTPage.getToken(request); 
    const res = await request.delete(`https://${aTPage.custdomain}` + "Document/delete-customeraddress-document", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + aTPage.tokenLogin
            },
            params: {
                id: "08da749f-6c15-47e2-8403-d49865d0146a"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
       
  });
  test("@Web Update info of Customer Attachments  function must work well. @TC_2500_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const aTPage = new AttachmentsTabAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await aTPage.getToken(request); 
    const res = await request.delete(`https://${aTPage.custdomain}` + "/Document/update-customeraddress-document", {
            data: {
                "documentId": "08da768f-21e7-4ac9-8276-dcf4ff67f98b",
                "isDisplayToFieldTech": true
            },
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + aTPage.tokenLogin
            },
            params: {
                id: "08da768f-21e7-4ac9-8276-dcf4ff67f98b"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
       
  });
  
 
  
 
