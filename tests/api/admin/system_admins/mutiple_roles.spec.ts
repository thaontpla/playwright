import { expect, test } from "@core/fixtures";
import { MutipleRolesPage } from "../../../../page/api/admin/system_admins/mutiple_roles";

  
  test("@Web the user update roles success @TC_2499_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new MutipleRolesPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await mRPage.setAllRolesForSystemAdmin(request);
       
  });
  test("@Web the user have mutil roles @TC_2499_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new MutipleRolesPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
    await mRPage.getToken(request);
    const res = await request.get(`https://${mRPage.authdomain}` + "/Role/list", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + mRPage.tokenLogin
        }
    }); //200,201,

    const resjson = await res.json();
    console.log("333333", resjson);
    await expect(res.status()).toBe(200);
    expect(resjson['roles'].length >= 2).toBeTruthy();

  });
 
