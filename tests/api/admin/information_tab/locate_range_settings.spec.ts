import { expect, test } from "@core/fixtures";
import { LocateRangeSettingsAPIPage } from "../../../../page/api/admin/information_tab/locate_range_settings"

  test("@Web the user can update Locate Range @TC_2488_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const lRSPage = new LocateRangeSettingsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain,conf.suiteConf.custdomain);
    await lRSPage.getToken(request);
    const res = await request.put(`https://${lRSPage.maindomain}` + "/Company", {
        data: {
            "id": "81c248aa-bb76-4b5c-97b8-3b59419e97d3",
            "name": "Squeegee Squad - Headquarters",
            "legalName": "Jack & Joe's Window Cleaning, Inc.",
            "askTheSealCompanyId": 2088,
            "lastCustomerImported": "2019-12-05T18:24:33",
            "dateCreated": "2021-03-24T03:02:15",
            "dateModified": "2022-08-16T16:02:53.253245",
            "thankYouEnd": "2018-08-06T05:00:00",
            "thankYouStart": "2017-08-06T05:00:00",
            "useOneWeekPayPeriods": true,
            "quoteForm": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit euismod neque eu faucibus. Mauris vitae mattis metus, eu hendrerit leo. Sed mattis, mauris in convallis dapibus, nunc quam fermentum dolor, accumsan porta leo sapien et massa. Duis nec aliquam massa, ut pulvinar enim. Nulla sagittis ex sit amet diam mattis consectetur. Nunc porta lacus velit, nec dictum augue aliquet ut. Curabitur eu sagittis neque, id vestibulum neque.\nabc\nVivamus eu lacinia lorem. Nam egestas posuere purus volutpat sollicitudin. Maecenas tortor quam, bibendum sit amet rutrum a, convallis id nisl. Donec nibh nunc, venenatis a vulputate at, consequat eleifend lorem. Nam fringilla posuere leo. Donec lobortis sapien non velit fringilla faucibus. In euismod porttitor tellus, at maximus ante porta eget.\n\nNunc eu euismod nisl. Pellentesque a dictum lacus. Nulla vitae tortor et nulla pulvinar luctus a eu felis. Donec commodo lacus vel jutrices. Vivamus faucibus tortor nisi, ut dictum ipsum tempus eu. Praesent pretium quam odio, a ultrices nulla ornare sollicitudin. Integer faucibus ac dui eget pulvinar. Cras non nisi et urna mattis feugiat. Vivamus mattis tincidunt iaculis.\n\nDuis ultricies neque augue, rhoncus ultricies turpis laoreet vel. Mauris fringilla velit eu pretium condimentum. Integer accumsan urna eget augue ullamcorper, eget ullamcorper libero maximus. Suspendisse potenti. Morbi magna nulla, pulvinar fermentum nisi at, scelerisque malesuada mi. Nulla faucibus risus hendrerit justo ullamcorper, at pulvinar dui gravida. Vestibulum blandit libero in nibh scelerisque, ac ullamcorper dolor posuere. Nunc magna felis, lacinia quis justo sit amet, blandit efficitur velit. Sed eget nunc mollis, convallis libero ac, faucibus odio. Aliquam semper turpis vel sollicitudin tincidunt. Sed finibus nibh et scelerisque facilisis. Vivamus in eros vestibulum, aliquet leo ut, pellentesque neque. Donec eu ante et turpis rutrum venenatis et ac massa. Nullam lobortis porta maximus.\n\nFusce eget porta justo. Proin elit ipsum, lacinia eget elit sed, semper venenatis nulla. Vestibulum vestibulum, nisi at venenatis vehicula, risus felis consectetur leo, et pharetra neque est quis mi. Nam in neque non lacus viverra ullamcorper ac eu eros. Donec blandit molestie nisi. Vestibulum finibus nibh at lacinia tristique. Aliquam in lectus interdum, suscipit odio ac, lobortis quam. Sed iaculis velit ut massa laoreet ultricies. Vestibulum vel pretium diam.",
            "invoiceForm": "Extra Charges:May apply where there is smoke residue, excessive interior ladder work, exterior obstacles, excessive furniture moving,\netc. You will be notified of any extra charges that may apply before you choose to continue work. There will also be a\n3% credit card processing fee if you elect to use a credit card to pay for your service.\nNotice of Responsibility:\nSqueegee Squad™ is not responsible for etching or fogging on windows due to the use of chemicals that may be used\nat the customer’s request to remove hard water stains. Squeegee Squad™ is not responsible for any scratches on\ntempered or heat strengthened glass windows, as scrapers are used in cleaning windows and flaws in tempered glass\nmay cause scratches. Squeegee Squad™ is not responsible for any scratches on tint film that has been applied to any\nwindows. The company shall use ordinary care in performing all work, but shall not be liable for incidental or\nconsequential damages, nor shall it be liable for injuries to persons or damage to property except those directly caused\nby negligent acts of the company’s employees. Squeegee Squad™ will not be held responsible for any customer\nproperty that has a pre-existing condition that causes damage to said property during normal service practices by\nSqueegee Squad™. Customers are encouraged to move any property, i.e. furniture and knick knacks, prior to our\ncleaning process. If the customer wants Squeegee Squad™ to move any property to access window, Squeegee\nSquad™ will not be held liable for any damage done during the moving process. Squeegee Squad™ is not responsible\nfor damaging any removable grids that may have pre-existing conditions, have been poorly manufactured, have been\ninstalled to tightly, or have become too tightly fitting or brittle due to climate, sunshine, or temperature factors.\nSqueegee Squad will not be held responsible for mold, rust, or any other problems that may occur after pressure\nwashing.\nPayment & Past Due Accounts:\nUnless noted in this proposal, payment is due upon completion of work. A monthly finance charge, equal to the highest\nallowable interest rate, may be levied on customer’s account if delinquent over 30 days. Any costs, including attorneys’\nfees, in collecting amounts past due shall be paid for by customer.\nLots of verbiage Joe R 4.13.22",
            "logo": null,
            "logoUrl": "https://squadwareuserdocuments.blob.core.windows.net/companylogo/81c248aa-bb76-4b5c-97b8-3b59419e97d3.jpg",
            "senderEmail": "total@bunky.com",
            "quoteEmailSubject": "Quote Subject, yo22313",
            "quoteEmailBody": "Quote body, yo22313\n",
            "invoiceEmailSubject": "Invoice subject, Yo12312",
            "invoiceEmailBody": "Invoice body, yo12313",
            "textStatusOnTheWay": "I'm headed over!1",
            "textStatusJobStarted": "Job started.1",
            "textStatusJobComplete": "Job complete.1",
            "tagLine": null,
            "addresses": [{
                "id": "6711e45f-c3c2-49f9-9272-69db594349aa",
                "customerId": "00000000-0000-0000-0000-000000000000",
                "contacts": null,
                "primaryContact": null,
                "name": null,
                "address1": "3060 142nd Ave. NE",
                "address2": "",
                "address3": "",
                "city": "Ham Lake",
                "stateId": "9cbbd200-d0b8-4b10-957b-439ac85bf417",
                "state": null,
                "country": null,
                "zipCode": "55304",
                "taxGroupId": null,
                "latitude": 45.22762,
                "longitude": -93.19123,
                "dateCreated": null,
                "createdById": null,
                "dateModified": "2022-08-16T16:02:54",
                "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb"
            }],
            "phones": [{
                "id": "16da8d39-a672-46de-a1d2-dbd4eee4891c",
                "phoneNumber": "(866) 927-4669",
                "phoneTypeId": "8e476aad-0e24-4634-9535-4e414951464a",
                "dateCreated": null,
                "dateModified": "2021-12-22T19:01:37",
                "modifiedById": "d92025e8-c267-45ef-a4b2-1959e3485d98",
                "createdById": null
            }],
            "phoneTypes": [{
                    "id": "1650b282-dd95-4829-8fe7-e033ac68be10",
                    "type": "Other"
                },
                {
                    "id": "1b0b417e-767a-4c33-9dab-e8276b80e223",
                    "type": "Cell"
                },
                {
                    "id": "20a67579-4d3b-4f99-a072-a6ce4d170287",
                    "type": "Pager"
                },
                {
                    "id": "8e476aad-0e24-4634-9535-4e414951464a",
                    "type": "Work"
                },
                {
                    "id": "9a2225cf-61a4-44c1-bcee-022c65a5adcd",
                    "type": "Home"
                },
                {
                    "id": "e7696d65-4395-4789-a5f5-69f0987916fa",
                    "type": "Fax"
                }
            ],
            "createdById": "950302dd-68e1-4ef4-9757-05206604d31d",
            "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb",
            "contactId": "6bd3f3be-1a18-430c-a593-662fab16e199",
            "contact": {
                "id": "6bd3f3be-1a18-430c-a593-662fab16e199",
                "firstName": "Jeremy",
                "lastName": "Johnson",
                "email": "jeremy@squadwareone.com",
                "phoneNumber": "(651) 327-0025"
            },
            "chargeSalesTax": false,
            "disabled": false,
            "periodStartDate": "2021-09-06T10:00:00",
            "periodStartWeekDay": 0,
            "periodDuration": 1,
            "periodOvertimeAfter": 10,
            "email": "testmail@gmail.com",
            "invoiceSeed": 1002,
            "discQBID": "80000002-1650658693",
            "miscQBID": "80000008-1650658780",
            "tipQBID": "80000006-1650658738",
            "greenMiles": 1,
            "yellowMiles": "2",
            "redMiles": "5",
            "address": {
                "id": "6711e45f-c3c2-49f9-9272-69db594349aa",
                "customerId": "00000000-0000-0000-0000-000000000000",
                "contacts": null,
                "primaryContact": null,
                "name": null,
                "address1": "3060 142nd Ave. NE",
                "address2": "",
                "address3": "",
                "city": "Ham Lake",
                "stateId": "9cbbd200-d0b8-4b10-957b-439ac85bf417",
                "state": null,
                "country": null,
                "zipCode": "55304",
                "taxGroupId": null,
                "latitude": 45.22762,
                "longitude": -93.19123,
                "dateCreated": null,
                "createdById": null,
                "dateModified": "2022-08-16T16:02:54",
                "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb"
            }
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + lRSPage.tokenLogin
        }

    }); //200,201,
    await expect(res.status()).toBe(200);
  });
  test("@Web the user can not save 0 to the Range @TC_2488_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const lRSPage = new LocateRangeSettingsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain,conf.suiteConf.custdomain);
    await lRSPage.getToken(request);
    const res = await request.put(`https://${lRSPage.maindomain}` + "/Company", {
        data: {
            "id": "81c248aa-bb76-4b5c-97b8-3b59419e97d3",
            "name": "Squeegee Squad - Headquarters",
            "legalName": "Jack & Joe's Window Cleaning, Inc.",
            "askTheSealCompanyId": 2088,
            "lastCustomerImported": "2019-12-05T18:24:33",
            "dateCreated": "2021-03-24T03:02:15",
            "dateModified": "2022-08-16T16:02:53.253245",
            "thankYouEnd": "2018-08-06T05:00:00",
            "thankYouStart": "2017-08-06T05:00:00",
            "useOneWeekPayPeriods": true,
            "quoteForm": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit euismod neque eu faucibus. Mauris vitae mattis metus, eu hendrerit leo. Sed mattis, mauris in convallis dapibus, nunc quam fermentum dolor, accumsan porta leo sapien et massa. Duis nec aliquam massa, ut pulvinar enim. Nulla sagittis ex sit amet diam mattis consectetur. Nunc porta lacus velit, nec dictum augue aliquet ut. Curabitur eu sagittis neque, id vestibulum neque.\nabc\nVivamus eu lacinia lorem. Nam egestas posuere purus volutpat sollicitudin. Maecenas tortor quam, bibendum sit amet rutrum a, convallis id nisl. Donec nibh nunc, venenatis a vulputate at, consequat eleifend lorem. Nam fringilla posuere leo. Donec lobortis sapien non velit fringilla faucibus. In euismod porttitor tellus, at maximus ante porta eget.\n\nNunc eu euismod nisl. Pellentesque a dictum lacus. Nulla vitae tortor et nulla pulvinar luctus a eu felis. Donec commodo lacus vel jutrices. Vivamus faucibus tortor nisi, ut dictum ipsum tempus eu. Praesent pretium quam odio, a ultrices nulla ornare sollicitudin. Integer faucibus ac dui eget pulvinar. Cras non nisi et urna mattis feugiat. Vivamus mattis tincidunt iaculis.\n\nDuis ultricies neque augue, rhoncus ultricies turpis laoreet vel. Mauris fringilla velit eu pretium condimentum. Integer accumsan urna eget augue ullamcorper, eget ullamcorper libero maximus. Suspendisse potenti. Morbi magna nulla, pulvinar fermentum nisi at, scelerisque malesuada mi. Nulla faucibus risus hendrerit justo ullamcorper, at pulvinar dui gravida. Vestibulum blandit libero in nibh scelerisque, ac ullamcorper dolor posuere. Nunc magna felis, lacinia quis justo sit amet, blandit efficitur velit. Sed eget nunc mollis, convallis libero ac, faucibus odio. Aliquam semper turpis vel sollicitudin tincidunt. Sed finibus nibh et scelerisque facilisis. Vivamus in eros vestibulum, aliquet leo ut, pellentesque neque. Donec eu ante et turpis rutrum venenatis et ac massa. Nullam lobortis porta maximus.\n\nFusce eget porta justo. Proin elit ipsum, lacinia eget elit sed, semper venenatis nulla. Vestibulum vestibulum, nisi at venenatis vehicula, risus felis consectetur leo, et pharetra neque est quis mi. Nam in neque non lacus viverra ullamcorper ac eu eros. Donec blandit molestie nisi. Vestibulum finibus nibh at lacinia tristique. Aliquam in lectus interdum, suscipit odio ac, lobortis quam. Sed iaculis velit ut massa laoreet ultricies. Vestibulum vel pretium diam.",
            "invoiceForm": "Extra Charges:May apply where there is smoke residue, excessive interior ladder work, exterior obstacles, excessive furniture moving,\netc. You will be notified of any extra charges that may apply before you choose to continue work. There will also be a\n3% credit card processing fee if you elect to use a credit card to pay for your service.\nNotice of Responsibility:\nSqueegee Squad™ is not responsible for etching or fogging on windows due to the use of chemicals that may be used\nat the customer’s request to remove hard water stains. Squeegee Squad™ is not responsible for any scratches on\ntempered or heat strengthened glass windows, as scrapers are used in cleaning windows and flaws in tempered glass\nmay cause scratches. Squeegee Squad™ is not responsible for any scratches on tint film that has been applied to any\nwindows. The company shall use ordinary care in performing all work, but shall not be liable for incidental or\nconsequential damages, nor shall it be liable for injuries to persons or damage to property except those directly caused\nby negligent acts of the company’s employees. Squeegee Squad™ will not be held responsible for any customer\nproperty that has a pre-existing condition that causes damage to said property during normal service practices by\nSqueegee Squad™. Customers are encouraged to move any property, i.e. furniture and knick knacks, prior to our\ncleaning process. If the customer wants Squeegee Squad™ to move any property to access window, Squeegee\nSquad™ will not be held liable for any damage done during the moving process. Squeegee Squad™ is not responsible\nfor damaging any removable grids that may have pre-existing conditions, have been poorly manufactured, have been\ninstalled to tightly, or have become too tightly fitting or brittle due to climate, sunshine, or temperature factors.\nSqueegee Squad will not be held responsible for mold, rust, or any other problems that may occur after pressure\nwashing.\nPayment & Past Due Accounts:\nUnless noted in this proposal, payment is due upon completion of work. A monthly finance charge, equal to the highest\nallowable interest rate, may be levied on customer’s account if delinquent over 30 days. Any costs, including attorneys’\nfees, in collecting amounts past due shall be paid for by customer.\nLots of verbiage Joe R 4.13.22",
            "logo": null,
            "logoUrl": "https://squadwareuserdocuments.blob.core.windows.net/companylogo/81c248aa-bb76-4b5c-97b8-3b59419e97d3.jpg",
            "senderEmail": "total@bunky.com",
            "quoteEmailSubject": "Quote Subject, yo22313",
            "quoteEmailBody": "Quote body, yo22313\n",
            "invoiceEmailSubject": "Invoice subject, Yo12312",
            "invoiceEmailBody": "Invoice body, yo12313",
            "textStatusOnTheWay": "I'm headed over!1",
            "textStatusJobStarted": "Job started.1",
            "textStatusJobComplete": "Job complete.1",
            "tagLine": null,
            "addresses": [{
                "id": "6711e45f-c3c2-49f9-9272-69db594349aa",
                "customerId": "00000000-0000-0000-0000-000000000000",
                "contacts": null,
                "primaryContact": null,
                "name": null,
                "address1": "3060 142nd Ave. NE",
                "address2": "",
                "address3": "",
                "city": "Ham Lake",
                "stateId": "9cbbd200-d0b8-4b10-957b-439ac85bf417",
                "state": null,
                "country": null,
                "zipCode": "55304",
                "taxGroupId": null,
                "latitude": 45.22762,
                "longitude": -93.19123,
                "dateCreated": null,
                "createdById": null,
                "dateModified": "2022-08-16T16:02:54",
                "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb"
            }],
            "phones": [{
                "id": "16da8d39-a672-46de-a1d2-dbd4eee4891c",
                "phoneNumber": "(866) 927-4669",
                "phoneTypeId": "8e476aad-0e24-4634-9535-4e414951464a",
                "dateCreated": null,
                "dateModified": "2021-12-22T19:01:37",
                "modifiedById": "d92025e8-c267-45ef-a4b2-1959e3485d98",
                "createdById": null
            }],
            "phoneTypes": [{
                    "id": "1650b282-dd95-4829-8fe7-e033ac68be10",
                    "type": "Other"
                },
                {
                    "id": "1b0b417e-767a-4c33-9dab-e8276b80e223",
                    "type": "Cell"
                },
                {
                    "id": "20a67579-4d3b-4f99-a072-a6ce4d170287",
                    "type": "Pager"
                },
                {
                    "id": "8e476aad-0e24-4634-9535-4e414951464a",
                    "type": "Work"
                },
                {
                    "id": "9a2225cf-61a4-44c1-bcee-022c65a5adcd",
                    "type": "Home"
                },
                {
                    "id": "e7696d65-4395-4789-a5f5-69f0987916fa",
                    "type": "Fax"
                }
            ],
            "createdById": "950302dd-68e1-4ef4-9757-05206604d31d",
            "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb",
            "contactId": "6bd3f3be-1a18-430c-a593-662fab16e199",
            "contact": {
                "id": "6bd3f3be-1a18-430c-a593-662fab16e199",
                "firstName": "Jeremy",
                "lastName": "Johnson",
                "email": "jeremy@squadwareone.com",
                "phoneNumber": "(651) 327-0025"
            },
            "chargeSalesTax": false,
            "disabled": false,
            "periodStartDate": "2021-09-06T10:00:00",
            "periodStartWeekDay": 0,
            "periodDuration": 1,
            "periodOvertimeAfter": 10,
            "email": "testmail@gmail.com",
            "invoiceSeed": 1002,
            "discQBID": "80000002-1650658693",
            "miscQBID": "80000008-1650658780",
            "tipQBID": "80000006-1650658738",
            "greenMiles": 0,
            "yellowMiles": 0,
            "redMiles": 0,
            "address": {
                "id": "6711e45f-c3c2-49f9-9272-69db594349aa",
                "customerId": "00000000-0000-0000-0000-000000000000",
                "contacts": null,
                "primaryContact": null,
                "name": null,
                "address1": "3060 142nd Ave. NE",
                "address2": "",
                "address3": "",
                "city": "Ham Lake",
                "stateId": "9cbbd200-d0b8-4b10-957b-439ac85bf417",
                "state": null,
                "country": null,
                "zipCode": "55304",
                "taxGroupId": null,
                "latitude": 45.22762,
                "longitude": -93.19123,
                "dateCreated": null,
                "createdById": null,
                "dateModified": "2022-08-16T16:02:54",
                "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb"
            }
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + lRSPage.tokenLogin
        }

    }); //200,201,
    await expect(res.status()).not.toBe(200);
  });
  test("@Web the user can not save duplicate value to the Range @TC_2488_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const lRSPage = new LocateRangeSettingsAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain,conf.suiteConf.custdomain);
    await lRSPage.getToken(request);
    const res = await request.put(`https://${lRSPage.maindomain}` + "/Company", {
        data: {
            "id": "81c248aa-bb76-4b5c-97b8-3b59419e97d3",
            "name": "Squeegee Squad - Headquarters",
            "legalName": "Jack & Joe's Window Cleaning, Inc.",
            "askTheSealCompanyId": 2088,
            "lastCustomerImported": "2019-12-05T18:24:33",
            "dateCreated": "2021-03-24T03:02:15",
            "dateModified": "2022-08-16T16:02:53.253245",
            "thankYouEnd": "2018-08-06T05:00:00",
            "thankYouStart": "2017-08-06T05:00:00",
            "useOneWeekPayPeriods": true,
            "quoteForm": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit euismod neque eu faucibus. Mauris vitae mattis metus, eu hendrerit leo. Sed mattis, mauris in convallis dapibus, nunc quam fermentum dolor, accumsan porta leo sapien et massa. Duis nec aliquam massa, ut pulvinar enim. Nulla sagittis ex sit amet diam mattis consectetur. Nunc porta lacus velit, nec dictum augue aliquet ut. Curabitur eu sagittis neque, id vestibulum neque.\nabc\nVivamus eu lacinia lorem. Nam egestas posuere purus volutpat sollicitudin. Maecenas tortor quam, bibendum sit amet rutrum a, convallis id nisl. Donec nibh nunc, venenatis a vulputate at, consequat eleifend lorem. Nam fringilla posuere leo. Donec lobortis sapien non velit fringilla faucibus. In euismod porttitor tellus, at maximus ante porta eget.\n\nNunc eu euismod nisl. Pellentesque a dictum lacus. Nulla vitae tortor et nulla pulvinar luctus a eu felis. Donec commodo lacus vel jutrices. Vivamus faucibus tortor nisi, ut dictum ipsum tempus eu. Praesent pretium quam odio, a ultrices nulla ornare sollicitudin. Integer faucibus ac dui eget pulvinar. Cras non nisi et urna mattis feugiat. Vivamus mattis tincidunt iaculis.\n\nDuis ultricies neque augue, rhoncus ultricies turpis laoreet vel. Mauris fringilla velit eu pretium condimentum. Integer accumsan urna eget augue ullamcorper, eget ullamcorper libero maximus. Suspendisse potenti. Morbi magna nulla, pulvinar fermentum nisi at, scelerisque malesuada mi. Nulla faucibus risus hendrerit justo ullamcorper, at pulvinar dui gravida. Vestibulum blandit libero in nibh scelerisque, ac ullamcorper dolor posuere. Nunc magna felis, lacinia quis justo sit amet, blandit efficitur velit. Sed eget nunc mollis, convallis libero ac, faucibus odio. Aliquam semper turpis vel sollicitudin tincidunt. Sed finibus nibh et scelerisque facilisis. Vivamus in eros vestibulum, aliquet leo ut, pellentesque neque. Donec eu ante et turpis rutrum venenatis et ac massa. Nullam lobortis porta maximus.\n\nFusce eget porta justo. Proin elit ipsum, lacinia eget elit sed, semper venenatis nulla. Vestibulum vestibulum, nisi at venenatis vehicula, risus felis consectetur leo, et pharetra neque est quis mi. Nam in neque non lacus viverra ullamcorper ac eu eros. Donec blandit molestie nisi. Vestibulum finibus nibh at lacinia tristique. Aliquam in lectus interdum, suscipit odio ac, lobortis quam. Sed iaculis velit ut massa laoreet ultricies. Vestibulum vel pretium diam.",
            "invoiceForm": "Extra Charges:May apply where there is smoke residue, excessive interior ladder work, exterior obstacles, excessive furniture moving,\netc. You will be notified of any extra charges that may apply before you choose to continue work. There will also be a\n3% credit card processing fee if you elect to use a credit card to pay for your service.\nNotice of Responsibility:\nSqueegee Squad™ is not responsible for etching or fogging on windows due to the use of chemicals that may be used\nat the customer’s request to remove hard water stains. Squeegee Squad™ is not responsible for any scratches on\ntempered or heat strengthened glass windows, as scrapers are used in cleaning windows and flaws in tempered glass\nmay cause scratches. Squeegee Squad™ is not responsible for any scratches on tint film that has been applied to any\nwindows. The company shall use ordinary care in performing all work, but shall not be liable for incidental or\nconsequential damages, nor shall it be liable for injuries to persons or damage to property except those directly caused\nby negligent acts of the company’s employees. Squeegee Squad™ will not be held responsible for any customer\nproperty that has a pre-existing condition that causes damage to said property during normal service practices by\nSqueegee Squad™. Customers are encouraged to move any property, i.e. furniture and knick knacks, prior to our\ncleaning process. If the customer wants Squeegee Squad™ to move any property to access window, Squeegee\nSquad™ will not be held liable for any damage done during the moving process. Squeegee Squad™ is not responsible\nfor damaging any removable grids that may have pre-existing conditions, have been poorly manufactured, have been\ninstalled to tightly, or have become too tightly fitting or brittle due to climate, sunshine, or temperature factors.\nSqueegee Squad will not be held responsible for mold, rust, or any other problems that may occur after pressure\nwashing.\nPayment & Past Due Accounts:\nUnless noted in this proposal, payment is due upon completion of work. A monthly finance charge, equal to the highest\nallowable interest rate, may be levied on customer’s account if delinquent over 30 days. Any costs, including attorneys’\nfees, in collecting amounts past due shall be paid for by customer.\nLots of verbiage Joe R 4.13.22",
            "logo": null,
            "logoUrl": "https://squadwareuserdocuments.blob.core.windows.net/companylogo/81c248aa-bb76-4b5c-97b8-3b59419e97d3.jpg",
            "senderEmail": "total@bunky.com",
            "quoteEmailSubject": "Quote Subject, yo22313",
            "quoteEmailBody": "Quote body, yo22313\n",
            "invoiceEmailSubject": "Invoice subject, Yo12312",
            "invoiceEmailBody": "Invoice body, yo12313",
            "textStatusOnTheWay": "I'm headed over!1",
            "textStatusJobStarted": "Job started.1",
            "textStatusJobComplete": "Job complete.1",
            "tagLine": null,
            "addresses": [{
                "id": "6711e45f-c3c2-49f9-9272-69db594349aa",
                "customerId": "00000000-0000-0000-0000-000000000000",
                "contacts": null,
                "primaryContact": null,
                "name": null,
                "address1": "3060 142nd Ave. NE",
                "address2": "",
                "address3": "",
                "city": "Ham Lake",
                "stateId": "9cbbd200-d0b8-4b10-957b-439ac85bf417",
                "state": null,
                "country": null,
                "zipCode": "55304",
                "taxGroupId": null,
                "latitude": 45.22762,
                "longitude": -93.19123,
                "dateCreated": null,
                "createdById": null,
                "dateModified": "2022-08-16T16:02:54",
                "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb"
            }],
            "phones": [{
                "id": "16da8d39-a672-46de-a1d2-dbd4eee4891c",
                "phoneNumber": "(866) 927-4669",
                "phoneTypeId": "8e476aad-0e24-4634-9535-4e414951464a",
                "dateCreated": null,
                "dateModified": "2021-12-22T19:01:37",
                "modifiedById": "d92025e8-c267-45ef-a4b2-1959e3485d98",
                "createdById": null
            }],
            "phoneTypes": [{
                    "id": "1650b282-dd95-4829-8fe7-e033ac68be10",
                    "type": "Other"
                },
                {
                    "id": "1b0b417e-767a-4c33-9dab-e8276b80e223",
                    "type": "Cell"
                },
                {
                    "id": "20a67579-4d3b-4f99-a072-a6ce4d170287",
                    "type": "Pager"
                },
                {
                    "id": "8e476aad-0e24-4634-9535-4e414951464a",
                    "type": "Work"
                },
                {
                    "id": "9a2225cf-61a4-44c1-bcee-022c65a5adcd",
                    "type": "Home"
                },
                {
                    "id": "e7696d65-4395-4789-a5f5-69f0987916fa",
                    "type": "Fax"
                }
            ],
            "createdById": "950302dd-68e1-4ef4-9757-05206604d31d",
            "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb",
            "contactId": "6bd3f3be-1a18-430c-a593-662fab16e199",
            "contact": {
                "id": "6bd3f3be-1a18-430c-a593-662fab16e199",
                "firstName": "Jeremy",
                "lastName": "Johnson",
                "email": "jeremy@squadwareone.com",
                "phoneNumber": "(651) 327-0025"
            },
            "chargeSalesTax": false,
            "disabled": false,
            "periodStartDate": "2021-09-06T10:00:00",
            "periodStartWeekDay": 0,
            "periodDuration": 1,
            "periodOvertimeAfter": 10,
            "email": "testmail@gmail.com",
            "invoiceSeed": 1002,
            "discQBID": "80000002-1650658693",
            "miscQBID": "80000008-1650658780",
            "tipQBID": "80000006-1650658738",
            "greenMiles": 1,
            "yellowMiles": 2,
            "redMiles": 2,
            "address": {
                "id": "6711e45f-c3c2-49f9-9272-69db594349aa",
                "customerId": "00000000-0000-0000-0000-000000000000",
                "contacts": null,
                "primaryContact": null,
                "name": null,
                "address1": "3060 142nd Ave. NE",
                "address2": "",
                "address3": "",
                "city": "Ham Lake",
                "stateId": "9cbbd200-d0b8-4b10-957b-439ac85bf417",
                "state": null,
                "country": null,
                "zipCode": "55304",
                "taxGroupId": null,
                "latitude": 45.22762,
                "longitude": -93.19123,
                "dateCreated": null,
                "createdById": null,
                "dateModified": "2022-08-16T16:02:54",
                "modifiedById": "67d920d7-7205-445b-a1bf-1432aae06edb"
            }
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + lRSPage.tokenLogin
        }

    }); //200,201,
    await expect(res.status()).not.toBe(200);
  });
