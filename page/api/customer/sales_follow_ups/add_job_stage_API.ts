import {  Page ,APIRequestContext} from "@playwright/test";

export class AddJobStageAPIPage {
    page : Page;
    authdomain: String;
    maindomain: String;
    tokenLogin: String;
    status: number;
    resjson: JSON;
   
    constructor(page : Page,authdomain: String, maindomain: String) {
        this.page=page;
        this.authdomain=authdomain;
        this.maindomain=maindomain;
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
    async checkAddJobStagePage(request: APIRequestContext) {
        await this.getToken(request);
        const res = await request.get(`https://${this.maindomain}`+'/Job/FollowUpContact', {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + this.tokenLogin
            }
        }); //200,201,

        const resjson = await res.json();
        console.log("111111111111", resjson);
       this.status = res.status();
       this.resjson = resjson[0].bidStage;
    }
    
}

    