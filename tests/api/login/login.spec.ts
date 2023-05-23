import { expect, test } from "@core/fixtures";
import { LoginAPI } from "@api/login";

test.describe("User should be able login", async () => {
  test("User have successfully login @TC_SB_CHE_PPP_9", async ({
    conf,
    request,
  }) => {
    const login = new LoginAPI(conf.suiteConf.domain);
    await login.getToken(request);
  });
});
