import { expect, test } from "@core/fixtures";
import { JobCommissionAPIPage } from "../../../../page/api/Schedules/Job/commissions_tab";

  
  test("@Web only admin sytem roles, check if example account not show in active userlist @TC_2508_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const jCPage = new JobCommissionAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await jCPage.setRolesSystemAdminOnly(request);
    const res = await request.get(`https://${jCPage.userdomain}` + "/list-active-in-company", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + jCPage.tokenLogin
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
  test("@Web user full roles, check if example account must show in active userlist @TC_2508_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const jCPage = new JobCommissionAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await jCPage.setAllRolesForSystemAdmin(request);
    const res = await request.get(`https://${jCPage.userdomain}` + "/list-active-in-company", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + jCPage.tokenLogin
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
  
 
