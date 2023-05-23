import { expect, Page ,APIRequestContext} from "@playwright/test";

export class DisplayDatelessBidsPage {
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
    async sort(a, b){
        var nameA = a.toLowerCase(), nameB = b.toLowerCase();

        let G1 ="_!@#$%^&*";
        let  G2 ="0123456789abcdfghijklmnopqrstuvxyz";
        
        if (G1.includes(a.charAt(0)) && G2.includes(b.charAt(0)) )
         return -1; 
   
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
   };
   async sortDate(a, b) {

    const key1 = new Date(a);
    const key2 = new Date(b);

    if (key1 <= key2) {
            return 1;//true
        } else {
            return 0;//false
        } 
    };
}

    