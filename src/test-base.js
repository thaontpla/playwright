const base = require('@playwright/test');


exports.testcase = base.test.extend({
        testLogin: {
            username: "tuuvv.uit@gmail.com",
            password: "123456"
        },
        Base_URL: {
            domain_main_ui: "https://squadware-dev-ui.azurewebsites.net",
            domain_main_api: "https://squadware-api.azurewebsites.net",
            domain_auth_api: "https://squadware-auth-api.azurewebsites.net",
            domain_user_api: "https://squadware-user-api.azurewebsites.net",
            domain_customer_api: "https://squadware-customer-api.azurewebsites.net/"
        }
    }

)