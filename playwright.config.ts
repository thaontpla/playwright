// @ts-check
const { devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 5000 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 50000,
  },

  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    // headless: false,
    headless: true,// tren jenkin phải mở true
    screenshot: "on",
    trace: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    //-------------- browserstack::::------------//
    // {
    //     name: 'chrome@latest:Windows 10@browserstack',
    //     use: {
    //         browserName: 'chromium',
    //         channel: 'chrome'
    //     },
    // },
    // {
    //     name: 'chrome@latest-beta:OSX Big Sur@browserstack',
    //     use: {
    //         browserName: 'chromium',
    //         channel: 'chrome',
    //     },
    // },
    // {
    //     name: 'edge@90:Windows 10@browserstack',
    //     use: {
    //         browserName: 'chromium'
    //     },
    // },
    // {
    //     name: 'playwright-firefox@latest:OSX Catalina@browserstack',
    //     use: {
    //         browserName: 'firefox',
    //         ignoreHTTPSErrors: true
    //     },
    // },
    // {
    //     name: 'playwright-webkit@latest:OSX Big Sur@browserstack',
    //     use: {
    //         browserName: 'webkit',
    //         // Config to use playwright emulated devices.
    //         // ...devices['iPhone 12 Pro Max'],

    //     },
    // },
    //-------------- local::::------------//
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: {
          width: 1920,
          height: 1080,
        },
      },
    },
     /* Test against mobile viewports. */
     
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },

    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    // {
    //     name: 'firefox',
    //     use: {
    //         ...devices['Desktop Firefox'],
    //     },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;
