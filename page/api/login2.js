const { expect, request } = require('@playwright/test');

class LoginAPI {
    constructor(page) {
        this.page = page;
        this.res = "";
    }

    /**
     * Get access token
     * @returns token
     */
    async getToken() {
        const apiContext = await request.newContext();
        const res = await apiContext.post("https://squadware-auth-api.azurewebsites.net/sign-in", {
                data: { username: "tuuvv.uit@gmail.com", password: "123456" },
                headers: {
                    'accept': "*/*",
                    'Content-Type': 'application/json'
                },
            }) //200,201,
        const resjson = await res.json();
        return [resjson.token, resjson.expiresOn];

    }

    async loginPypass(arrRes) {
        let token = arrRes[0];
        let expiresOn = arrRes[1];

        console.log("token::", token)
        console.log("expiresOn::", expiresOn)

        this.page.addInitScript(value => {
            window.localStorage.setItem('sw-token', value);
        }, '{ "token":"' + token + '", "expiresOn":' + expiresOn + '}');
        this.page.addInitScript(value => {
            window.localStorage.setItem('sw-usr', value);
        }, '{"userName":"tuuvv.uit@gmail.com","displayName":"Tuu VV","avatar":"https://squadwareuserdocuments.blob.core.windows.net/profile/32a54a63-99c5-457d-b805-4068b1181b08.jpg"}');
        this.page.addInitScript(value => {
            window.localStorage.setItem('sw-role', value);
        }, '"' + '[\\"System Admin\\"]' + '"');
    }

}
module.exports = { LoginAPI };