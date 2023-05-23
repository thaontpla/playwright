import { expect, test } from "@core/fixtures";
import { DisplayToFieldTechsPage } from "../../../../page/api/job/attachments_tab/display_to_field_techs";

  
 
  test("@Web The The Get function is added. @TC_2487_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const dTFTPage = new DisplayToFieldTechsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dTFTPage.getToken(request); 
    const res = await request.get(`https://${dTFTPage.custdomain}` + "/document/list-job-document", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + dTFTPage.tokenLogin
            },
            params: {
                JobId: "b673d95b-6ae8-42cc-a823-c13854098d0a"
            }

        }); //200,201,

        const resjson = await res.json();
        console.log(resjson);
        await expect(res.status()).toBe(200);
      
  });
  test("@Web The The Update function is added. @TC_2487_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const dTFTPage = new DisplayToFieldTechsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dTFTPage.getToken(request); 
    const res = await request.patch(`https://${dTFTPage.custdomain}` + "/document/update-job-document", {
        data: {
            "isDisplayToFieldTech": true,
            "documentId": "08da7b63-4b80-41ec-8201-931493f06f29"
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + dTFTPage.tokenLogin
        },
        params: {
            id: "08da7b63-4b80-41ec-8201-931493f06f29"
        }

        }); //200,201,

        const resjson = await res.json();
        console.log(resjson);
        await expect(res.status()).toBe(200);
      
  });
  test("@Web The The Delete function is added. @TC_2487_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const dTFTPage = new DisplayToFieldTechsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await dTFTPage.getToken(request); 
    const res = await request.delete(`https://${dTFTPage.custdomain}` + "/document/delete-job-document", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + dTFTPage.tokenLogin
            },
            params: {
                id: "08da7b63-1fb8-4dba-8809-4ba872baaf54"
            }

        }); //200,201,

        const resjson = await res.json();
        console.log(resjson);
        await expect(res.status()).toBe(200);
      
  });
 
