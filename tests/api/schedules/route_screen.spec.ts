import { expect, test } from "@core/fixtures";
import { RoutesreenAPIPage } from "../../../page/api/Schedules/route_screen";

  
  test("@Web only admin sytem roles, check if example account not show in available userlist  @TC_2506_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const rSPage = new RoutesreenAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await rSPage.setRolesSystemAdminOnly(request);
    const res = await request.get(`https://${rSPage.userdomain}` + "/list-available", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + rSPage.tokenLogin
        },
        params: {
            Date: "2022-07-31",
            PageNumber: 1
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
  test("@Web user full roles, check if example account must show in available userlist @TC_2506_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const rSPage = new RoutesreenAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    await rSPage.setAllRolesForSystemAdmin(request);
        const res = await request.get(`https://${rSPage.userdomain}` + "/list-available", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + rSPage.tokenLogin
            },
            params: {
                Date: "2022-07-31",
                PageNumber: 1
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
 
