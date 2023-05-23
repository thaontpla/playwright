import { expect, test } from "@core/fixtures";
import { RemoveListButtonPage } from "../../../../page/api/customer/expiring_documents/remove_from_the_list_button";

  
  test("@Web The API remove document customer attachment should work. @TC_2653_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new RemoveListButtonPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.patch(`https://${eDPage.custdomain}` + "/Document/remove", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            id: "08da841c-457b-4e4d-8afc-fa701eb2762b"
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
  test("@Web  The API remove document jobsite attachment should work. @TC_2653_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new RemoveListButtonPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.patch(`https://${eDPage.custdomain}` + "/Document/remove-customeraddress-document", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            id: "08da880b-91cf-4e96-8bdd-ee30b4ccd1cd"
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
  test("@Web  The API remove document job attachment should work. @TC_2653_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new RemoveListButtonPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.patch(`https://${eDPage.custdomain}` + "/Document/remove-job-document", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            id: "08da7958-9add-4da8-8f32-b8f81cd3370f"
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
  test("@Web  The API remove document employees attachment should work. @TC_2653_4 ", async ({
    page,
    conf,
    request,
  }) => {
    const eDPage = new RemoveListButtonPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await eDPage.getToken(request);
    const res = await request.patch(`https://${eDPage.userdomain}` + "/Document/remove", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + eDPage.tokenLogin
        },
        params: {
            id: '08d85ea6-e54f-4157-8ceb-579ddf41a557'
        }

    }); //200,201,

    const resjson = await res.json();
    await expect(res.status()).toBe(200);
       
  });
 
  
 
