import { expect, test } from "@core/fixtures";
import { AddBidderCheckboxPage } from "../../../../page/api/employee/schedule_tab/add_bidder_checkbox";

  
 
  test("@Web The  update the API to data when bider check box checked @TC_2491_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const aBCPage = new AddBidderCheckboxPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await aBCPage.getToken(request); 
    const res = await request.post(`https://${aBCPage.userdomain}` + "/update", {
        data: {
            "id": "ae1b01b6-7f87-4e07-bbb8-1b447a639b35",
            "firstName": "a",
            "middleName": "",
            "fullName": "a a",
            "lastName": "a",
            "comments": "",
            "language": null,
            "languageId": null,
            "address": {
                "id": "08da802b-28e5-4678-8f5c-07f7f3a13361",
                "name": "ABM  Dallas-Jake Gabriela",
                "address1": "1450 Regal Rowa",
                "address2": null,
                "address3": null,
                "city": "Dallasa",
                "state": {
                    "id": "e1021dec-5074-4f9f-9c40-c8fda9ce9d5c",
                    "code": "TN",
                    "name": "Tennessee"
                },
                "country": null,
                "zipCode": "75249",
                "addressType": 0,
                "taxGroupId": null,
                "latitude": null,
                "longitude": null,
                "displayAddress": "ABM  Dallas-Jake Gabriela 1450 Regal Rowa Dallasa, TN 75249"
            },
            "languageOptions": [{
                    "id": "37624fc7-250a-454b-91d7-f9b8910f8481",
                    "description": "English"
                },
                {
                    "id": "4eba9f20-4793-4706-bd63-77171a686e88",
                    "description": "Portugese (Brazil)"
                }
            ],
            "states": [{
                "id": "38f13503-a78e-42e7-963b-8406a90ca8e9",
                "code": "AL",
                "name": "Alabama"
            }],
            "phones": [{
                "id": "00000000-0000-0000-0000-000000000000",
                "formattedPhoneNumber": "(999) 999-9999",
                "phoneNumber": "(999) 999-9999",
                "type": null,
                "typeId": "1b0b417e-767a-4c33-9dab-e8276b80e223"
            }],
            "phoneTypes": [{
                "id": "1b0b417e-767a-4c33-9dab-e8276b80e223",
                "type": "Cell"
            }],
            "birthDate": null,
            "hiredDate": null,
            "termDate": null,
            "routeScheduleViewPreference": null,
            "excludeFromRouteResources": false,
            "canBid": true,
            "askTheSealId": null,
            "comSale": null,
            "dateCreated": "1/1/0001 12:00:00 AM",
            "salaries": null,
            "email": "a1@a.com",
            "avatar": "https://squadwareuserdocuments.blob.core.windows.net/profile/Alphabet/A.svg"
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + aBCPage.tokenLogin
        }

    }); //200,201,

    await expect(res.status()).toBe(200);
      
  });
  test("@Web The  update the API to data when bider check box unchecked @TC_2491_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const aBCPage = new AddBidderCheckboxPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await aBCPage.getToken(request); 
    const res = await request.post(`https://${aBCPage.userdomain}` + "/update", {
        data: {
            "id": "ae1b01b6-7f87-4e07-bbb8-1b447a639b35",
            "firstName": "a",
            "middleName": "",
            "fullName": "a a",
            "lastName": "a",
            "comments": "",
            "language": null,
            "languageId": null,
            "address": {
                "id": "08da802b-28e5-4678-8f5c-07f7f3a13361",
                "name": "ABM  Dallas-Jake Gabriela",
                "address1": "1450 Regal Rowa",
                "address2": null,
                "address3": null,
                "city": "Dallasa",
                "state": {
                    "id": "e1021dec-5074-4f9f-9c40-c8fda9ce9d5c",
                    "code": "TN",
                    "name": "Tennessee"
                },
                "country": null,
                "zipCode": "75249",
                "addressType": 0,
                "taxGroupId": null,
                "latitude": null,
                "longitude": null,
                "displayAddress": "ABM  Dallas-Jake Gabriela 1450 Regal Rowa Dallasa, TN 75249"
            },
            "languageOptions": [{
                    "id": "37624fc7-250a-454b-91d7-f9b8910f8481",
                    "description": "English"
                },
                {
                    "id": "4eba9f20-4793-4706-bd63-77171a686e88",
                    "description": "Portugese (Brazil)"
                }
            ],
            "states": [{
                "id": "38f13503-a78e-42e7-963b-8406a90ca8e9",
                "code": "AL",
                "name": "Alabama"
            }],
            "phones": [{
                "id": "00000000-0000-0000-0000-000000000000",
                "formattedPhoneNumber": "(999) 999-9999",
                "phoneNumber": "(999) 999-9999",
                "type": null,
                "typeId": "1b0b417e-767a-4c33-9dab-e8276b80e223"
            }],
            "phoneTypes": [{
                "id": "1b0b417e-767a-4c33-9dab-e8276b80e223",
                "type": "Cell"
            }],
            "birthDate": null,
            "hiredDate": null,
            "termDate": null,
            "routeScheduleViewPreference": null,
            "excludeFromRouteResources": false,
            "canBid": false,
            "askTheSealId": null,
            "comSale": null,
            "dateCreated": "1/1/0001 12:00:00 AM",
            "salaries": null,
            "email": "a1@a.com",
            "avatar": "https://squadwareuserdocuments.blob.core.windows.net/profile/Alphabet/A.svg"
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + aBCPage.tokenLogin
        }

    }); //200,201,

    await expect(res.status()).toBe(200);    
  });
 
