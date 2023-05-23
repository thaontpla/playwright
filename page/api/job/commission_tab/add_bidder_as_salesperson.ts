import { expect, Page ,APIRequestContext} from "@playwright/test";

export class AddbiderAsSalesPage {
    page : Page;
    authdomain: String;
    maindomain: String;
    userdomain: String;
    custdomain: String;
    tokenLogin: String;
    status: number;
    resjson: JSON;
   
    constructor(page : Page,authdomain: String, maindomain: String, userdomain: String,custdomain: String) {
        this.page=page;
        this.authdomain=authdomain;
        this.maindomain=maindomain;
        this.userdomain=userdomain;
        this.custdomain=custdomain;
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
    async  check_arr(element,arr){
        let count = 0;
        for (let i = 0; i < arr.length; i ++){
            if (arr[i] === element)  {
                count ++;
                break
            }
        }
        return (count >0) ? true : false
    }
}

    