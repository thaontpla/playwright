import { expect, test } from "@core/fixtures";
import { EmployeeAddExpirationDatAPIePage } from "../../../../page/api/employee/attachments_tab/employee_add_expiration_date";

  
 
  test("@Web The  Expiration Date for Employees attachment must be available. @TC_2526_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const eAEDPage = new EmployeeAddExpirationDatAPIePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eAEDPage.getToken(request); 
    const res = await request.get(`https://${eAEDPage.userdomain}` + "/Document/list", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + eAEDPage.tokenLogin
            },
            params: {
                UserId: "78dd40c2-082e-41f7-a5c8-e4bd2584c163"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        await expect(resjson["documents"][0].expirationDate).toBeDefined();
      
  });
 
