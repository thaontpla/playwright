import { expect, test } from "@core/fixtures";
import { JobSortOrderAPIPage } from "../../../../page/api/employee/todays_route/job_sort_order";
  
 
  test("@Web  the earliest job of the day should be the first job and the latest job of the day should be the last job in the list @TC_2552_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const jSOPage = new JobSortOrderAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await jSOPage.getToken(request);
        const res = await request.get(`https://${jSOPage.maindomain}` + "/TodaysRoutes/Jobs/32a54a63-99c5-457d-b805-4068b1181b08/2022-07-31", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + jSOPage.tokenLogin
            }

        }); //200,201,
        console.log("aray json:", res);
        const resjson = await res.json();
       
        await expect(res.status()).toBe(200);
        let arr = [];
        for (let i = 0; i < resjson.length; i++) {

            arr[i] = await new Date(resjson[i].scheduledTime);
            console.log("i:", i, ":", arr[i]);
        }
        let test = await jSOPage.sorted(arr);

        await expect(test).toBeTruthy();
      
  });
 
