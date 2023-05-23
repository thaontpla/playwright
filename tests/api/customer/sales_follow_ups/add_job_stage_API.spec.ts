import { expect, test } from "@core/fixtures";
import { AddJobStageAPIPage } from "../../../../page/api/customer/sales_follow_ups/add_job_stage_API";

  
  test("@Web check if FollowUpContact respone contain 'bidStage' @TC_2495_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const aJTPage = new AddJobStageAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain);
    await aJTPage.checkAddJobStagePage(request)
    await expect(aJTPage.status).toBe(200);
    await expect(aJTPage.resjson).toBeDefined();
  });
