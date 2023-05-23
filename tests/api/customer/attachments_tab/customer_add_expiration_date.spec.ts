import { expect, test } from "@core/fixtures";
import { CustomerAddExpirationDateAPIPage } from "@api/customer/attachments_tab/customer_add_expiration_date";
  
 
  test("@Web The Expiration Date for Customer attachment must be available @TC_2525_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const CAEDPage = new CustomerAddExpirationDateAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await CAEDPage.getToken(request); 
    const res = await request.get(`https://${CAEDPage.custdomain}` + "/Document/list", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + CAEDPage.tokenLogin
            },
            params: {
                CustomerId: "08da10f9-cf66-4ed2-8ef5-15f547f1e9e9"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        await expect(resjson["documents"][0].expirationDate).toBeDefined();
      
  });
 
