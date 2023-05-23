import { expect, test } from "@core/fixtures";
import { SortColorcodeLocateAPIPage } from "../../../../page/api/Schedules/Calendar/sort_colorcode_locate";
  
 
  test("@Web  Sort the routes by range, shortest to longest @TC_2462_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const sCLPage = new SortColorcodeLocateAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await sCLPage.getToken(request);
        const res = await request.get(`https://${sCLPage.maindomain}` + "/Route/DistanceMonth", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + sCLPage.tokenLogin
            },
            params: {
                jobSplitId: "00b7d0e7-7dca-4db4-adee-310ede0af451",
                routeDate: "2022-08-01"
            }

        }); //200,201,

        const resjson = await res.json();
        console.log("aray json:", resjson["routeDistances"].length);
        await expect(res.status()).toBe(200);
        let arr = [];
        for (let i = 0; i < resjson["routeDistances"].length; i++) {

            arr[i] = await resjson["routeDistances"][i].distance;
            console.log("i:", i, ":", arr[i]);
        }
        let test = await sCLPage.sorted(arr);

        await expect(test).toBeTruthy();
      
  });
 
