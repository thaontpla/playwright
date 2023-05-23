import { APIRequestContext, expect } from "@playwright/test";

export class BidsToDoAPI {
  domain: string;
  request: APIRequestContext;
  constructor(domain: string,request: APIRequestContext) {
    this.domain = domain;
    this.request=request;
  }

  async addJobTodayBids(
    request: APIRequestContext,
    appointmentDate: string,
    completedDate: string
  ) {
    const res = await request.post(`https://${this.domain}/job`, {
      data: {
        customerId: "08da7578-7062-45d8-897f-269129941c14",
        customerName: null,
        companyId: null,
        jobAddress: {
          id: "249da954-8310-4c10-9768-03419e601faa",
          customerId: "08da7578-7062-45d8-897f-269129941c14",
          contacts: [
            {
              id: "1b134dda-7104-448a-9bcf-4dc199ad8958",
              addressId: "249da954-8310-4c10-9768-03419e601faa",
              name: "Anh Ta",
              phone: "(123) 497-8266",
              email: "thaontp@linxhq.com",
              isPrimary: true,
              isSendText: false,
              phoneTypeId: "1b0b417e-767a-4c33-9dab-e8276b80e223",
              PhoneType: null,
              DateCreated: "2022-08-03T17:53:37",
              CreatedById: "67d920d7-7205-445b-a1bf-1432aae06edb",
              DateModified: null,
              ModifiedById: null,
            },
          ],
          primaryContact: null,
          name: "Asian",
          address1: "Market Street Ext",
          address2: "Los Angeles St",
          address3: null,
          city: "Baden",
          stateId: "0675566e-1e15-4f19-b882-e7fc12d407aa",
          state: null,
          country: null,
          zipCode: "10001",
          taxGroupId: null,
          Latitude: null,
          Longitude: null,
          DateCreated: "2022-08-03T17:53:35",
          CreatedById: "67d920d7-7205-445b-a1bf-1432aae06edb",
          DateModified: null,
          ModifiedById: null,
          stateName: "New York",
        },
        purchaseOrder: "PO-54321",
        estimatedHours: "5",
        actualHours: "",
        jobsiteContacts: [],
        jobStage: "1",
        scheduleDate: "",
        completedDate: null,
        bidAppointment: appointmentDate,
        bidCompleted: completedDate,
        includeOnCancellation: false,
        equipment: "",
        jobEquipmentNote: null,
        jobNote: "",
        jobsiteNote: "",
        showEquipmentOnSchedule: false,
        showJobNoteOnSchedule: false,
        showJobsiteNoteOnSchedule: false,
        description: "",
        jobTemplates: [],
        displayOnPrintOutsEmails: true,
        jobItems: [
          {
            addedOnLocation: false,
            companyPriceItemId: "2e6b8942-209c-4e58-89f9-69ae7bef5a5c",
            description: "Red Pencil",
            price: 25,
            quantity: 1,
            taxable: true,
            total: 0,
            upsale: false,
          },
          {
            addedOnLocation: false,
            companyPriceItemId: "b053f1ed-5678-450d-931c-3e6c64606bc1",
            description: "White Pencil",
            price: 30,
            quantity: 1,
            taxable: false,
            total: 0,
            upsale: false,
          },
          {
            addedOnLocation: false,
            companyPriceItemId: "1e39206a-73e4-4abf-b4b9-ae78fc11d2f6",
            description: "3",
            price: 300,
            quantity: 1,
            taxable: true,
            total: 0,
            upsale: false,
          },
        ],
        isResceduled: true,
        dateCreated: "",
        dateModified: "",
        modifiedById: "",
        createdById: "",
        discountPercent: 0,
        discountDollars: 0,
        discountType: 0,
        taxPercent: 0,
      },
    });
    expect(res.status()).toBe(200);
    const resBody = await res.json();
    return resBody.id;
  }

  async deleteJobBid(
    request: APIRequestContext,
    id: string,
    accessToken: string
  ) {
    const res = await request.delete(
      `https://squadware-api.azurewebsites.net/job/${id}`,
    );
    expect(res.status()).toBe(200);
  }
}
