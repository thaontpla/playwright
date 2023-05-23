import { expect, test } from "@core/fixtures";
import { CustomerListAPIPage } from "../../../../page/api/admin/system_admins/customer_list";

  
  test("@Web the user have 5 roles and it must be on employees list @TC_2505_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const cLPage = new CustomerListAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await cLPage.setAllRolesForSystemAdmin(request);
        const res = await request.get(`https://${cLPage.userdomain}` + "/list-all", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + cLPage.tokenLogin
            }
        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);

        let success = false;
        for (let i = 0; i < resjson['users'].length; i++) {
            let fullName = resjson['users'][i]['fullName'];
            if (fullName == "Tuu VV") {
                success = true;
                break;
            }
        }
        expect(success).toBeTruthy();
  });
  test("@Web the user have only systems admin roles and it must be not on employees list @TC_2505_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const cLPage = new CustomerListAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await cLPage.setRolesSystemAdminOnly(request);
        const res = await request.get(`https://${cLPage.userdomain}` + "/list", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + cLPage.tokenLogin
            }
        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);

        let success = false;
        for (let i = 0; i < resjson['users'].length; i++) {
            let fullName = resjson['users'][i]['fullName'];
            if (fullName == "Tuu VV") {
                success = true;
                break;
            }
        }
        expect(success).toBeFalsy();
  });
