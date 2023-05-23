import { expect, test } from "@core/fixtures";
import { JobAddExpirationDatAPIePage } from "../../../../page/api/job/attachments_tab/job_add_expiration_date";

  
 
  test("@Web The Expiration Date for Job attachment must be available. @TC_2523_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const jAEDPage = new JobAddExpirationDatAPIePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await jAEDPage.getToken(request); 
    const res = await request.get(`https://${jAEDPage.custdomain}` + "/Document/list-job-document", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + jAEDPage.tokenLogin
            },
            params: {
                JobId: "b673d95b-6ae8-42cc-a823-c13854098d0a"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        await expect(resjson["documents"][0].expirationDate).toBeDefined();
      
  });
 
