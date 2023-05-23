import { expect, Page ,APIRequestContext} from "@playwright/test";

export class RoutesreenAPIPage {
    page : Page;
    authdomain: String;
    maindomain: String;
    userdomain: String;
    tokenLogin: String;
    status: number;
    resjson: JSON;
   
    constructor(page : Page,authdomain: String, maindomain: String, userdomain: String) {
        this.page=page;
        this.authdomain=authdomain;
        this.maindomain=maindomain;
        this.userdomain=userdomain;
        this.tokenLogin = "";
        this.status = 0;
        this.resjson;
    }

     /**
     * Get access token
     * @returns token
     */
    async getToken(request: APIRequestContext) {
        const res = await request.post(`https://${this.authdomain}/sign-in`, {
                data: { username: "tuuvv.uit@gmail.com", password: "123456" },
                headers: {
                    'accept': "*/*",
                    'Content-Type': 'application/json'
                },
            }) //200,201,
        const resjson = await res.json();
        this.tokenLogin = resjson.token;
    }
    async setAllRolesForSystemAdmin(request: APIRequestContext) {
        await this.getToken(request);
        const res = await request.post(`https://${this.authdomain}` + "/Role/update", {
            data: {
                "userId": "32a54a63-99c5-457d-b805-4068b1181b08",
                "roleIds": [
                    "973463ed-723a-4ea2-b182-0fcd0baef0c2",
                    "672e19ec-296d-430a-86ac-135ff7d2bce0",
                    "6c76405b-294c-4720-8396-2ff142a418b4",
                    "9ae7624f-4a3f-45f3-bbf5-073a4bc6a319",
                    "a45e1805-c2a8-4a6d-9f86-dd3fd2342097",
                    "5366802b-fd0f-4858-ace7-88d0c3233bb5"
                ],
                "companyId": "81c248aa-bb76-4b5c-97b8-3b59419e97d3",
                "isDefaultCompany": true
            },
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + this.tokenLogin
            }
        }); //200,201,

        const resjson = await res.json();
        console.log("111111", resjson);
        await expect(res.status()).toBe(200);
    }
    async setRolesSystemAdminOnly(request: APIRequestContext) {
        await this.getToken(request);
        const res = await request.post(`https://${this.authdomain}` + "/Role/update", {
            data: {
                "userId": "32a54a63-99c5-457d-b805-4068b1181b08",
                "roleIds": [
                    "973463ed-723a-4ea2-b182-0fcd0baef0c2"
                ],
                "companyId": "81c248aa-bb76-4b5c-97b8-3b59419e97d3",
                "isDefaultCompany": true
            },
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + this.tokenLogin
            }
        }); //200,201,

        const resjson = await res.json();
        console.log("3333333", resjson);
        await expect(res.status()).toBe(200);
    }
}

    