import { APIRequestContext, request, test as base } from "@playwright/test";
import { ConfigImpl } from "@core/conf/conf";
import { extractCodeName } from "@core/utils/string";

import { getUserToken } from "./utils/token";
import { CaseConf, Config, FixtureToken } from "../types/core/fixture";

const sanitizeTestConfig = (config: Config) => {
  return Object.assign({}, config.suiteConf || {}, config.caseConf || {});
};

export const test = base.extend<{
  conf: Config;
  cConf: CaseConf;
  token: FixtureToken;
  authRequest: APIRequestContext;
}>({
  // all conf
  conf: [
    async ({}, use, testInfo) => {
      const codeNames = extractCodeName(testInfo.title);
      if (codeNames.length !== 1) {
        throw new Error(
          "Invalid code name." +
            "Please attach code name to your test with the format @TC_<codename> OR @TS_<codename> OR @SB_<codename>"
        );
      }
      const conf = new ConfigImpl(testInfo.file, codeNames[0]);
      await conf.loadConfig();
      await use(conf);
    },
    { scope: "test" },
  ],
  // case conf
  cConf: [
    async ({ conf }, use) => {
      await use(conf.caseConf);
    },
    { scope: "test" },
  ],
  //token
  token: [
    async ({ conf }, use) => {
      const context = {
        getUserToken: async ({ username, password }) => {
          return getUserToken(conf.suiteConf.api, { username, password });
        },
      };
      await use(context);
    },
    { scope: "test" },
  ],

  authRequest: [
    async ({ conf, token: fixtureToken }, use) => {
      // get token
      const config = sanitizeTestConfig(conf);
      const authorization = await fixtureToken.getUserToken({
        username: config.username,
        password: config.password,
      });
      const context = await request.newContext({
        extraHTTPHeaders: {
          ["Authorization"]: `Bearer ${authorization.token}`,
        },
      });
      use(context);
    },
    { scope: "test" },
  ],
  //browser stack
  page: async ({ page, playwright }, use, testInfo) => {
    // Use BrowserStack Launched Browser according to capabilities for cross-browser testing.
    if (testInfo.project.name.match(/browserstack/)) {
      patchCaps(testInfo.project.name, `${testInfo.file} - ${testInfo.title}`);
      const vBrowser = await playwright.chromium.connect({
        wsEndpoint:
          `wss://cdp.browserstack.com/playwright?caps=` +
          `${encodeURIComponent(JSON.stringify(caps))}`,
      });
      const vContext = await vBrowser.newContext(testInfo.project.use);
      const vPage = await vContext.newPage();
      await use(vPage);
      const testResult = {
        action: "setSessionStatus",
        arguments: {
          status: evaluateSessionStatus(testInfo.status),
          reason: nestedKeyValue(testInfo, ["error", "message"]),
        },
      };
      await vPage.evaluate(() => {},
      `browserstack_executor: ${JSON.stringify(testResult)}`);
      await vPage.close();
      await vBrowser.close();
    } else {
      use(page);
    }
  },
});
// BrowserStack Specific Capabilities.

const cp = require("child_process");
const clientPlaywrightVersion = cp
  .execSync("npx playwright --version")
  .toString()
  .trim()
  .split(" ")[1];
const BrowserStackLocal = require("browserstack-local");

const caps = {
  browser: "chrome",
  os: "osx",
  os_version: "catalina",
  name: "My first playwright test",
  build: "playwright-build-1",
  "browserstack.username": process.env.BROWSERSTACK_USERNAME || "qateam_4mOEUA",
  "browserstack.accessKey":
    process.env.BROWSERSTACK_ACCESS_KEY || "NzsduYY6QU5YqCYvFT96",
  "browserstack.local": process.env.BROWSERSTACK_LOCAL || false,
  "client.playwrightVersion": clientPlaywrightVersion,
};

exports.bsLocal = new BrowserStackLocal.Local();

// replace NzsduYY6QU5YqCYvFT96 with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
exports.BS_LOCAL_ARGS = {
  key: process.env.BROWSERSTACK_ACCESS_KEY || "NzsduYY6QU5YqCYvFT96",
};

// Patching the capabilities dynamically according to the project name.
const patchCaps = (name, title) => {
  let combination = name.split(/@browserstack/)[0];
  let [browerCaps, osCaps] = combination.split(/:/);
  let [browser, browser_version] = browerCaps.split(/@/);
  let osCapsSplit = osCaps.split(/ /);
  let os = osCapsSplit.shift();
  let os_version = osCapsSplit.join(" ");
  caps.browser = browser ? browser : "chrome";
  caps.os = os ? os : "osx";
  caps.os_version = os_version ? os_version : "catalina";
  caps.name = title;
};

const isHash = (entity) =>
  Boolean(entity && typeof entity === "object" && !Array.isArray(entity));
const nestedKeyValue = (hash, keys) =>
  keys.reduce((hash, key) => (isHash(hash) ? hash[key] : undefined), hash);
const isUndefined = (val) => val === undefined || val === null || val === "";
const evaluateSessionStatus = (status) => {
  if (!isUndefined(status)) {
    status = status.toLowerCase();
  }
  if (status === "passed") {
    return "passed";
  } else if (status === "failed" || status === "timedout") {
    return "failed";
  } else {
    return "";
  }
};

export { expect, request } from "@playwright/test";
