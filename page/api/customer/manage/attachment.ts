import { APIRequestContext, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

export class AttachmentCustomer {
  domain: string;
  constructor(domain: string) {
    this.domain = domain;
  }

  /**
   * Upload file attachment
   * @param authRequest
   * @param idCustomer
   * @param expDate
   * @param note
   * @param fileName
   * @returns
   */
  async uploadFile(
    authRequest: APIRequestContext,
    idCustomer: string,
    expDate: string,
    note: string,
    fileName: string
  ) {
    const file = path.resolve("data-test", fileName);
    const image = fs.readFileSync(file);
    const res = await authRequest.put(
      `https://${this.domain}/document/add-document`,
      {
        multipart: {
          id: idCustomer,
          file: {
            name: fileName,
            mimeType: "pdf",
            buffer: image,
          },
          note: note,
          ExpirationDate: expDate,
          isDisplayToFieldTech: true,
        },
      }
    );
    expect(res.status()).toBe(200);
    const resBody = await res.json();
    return resBody.id;
  }

  
  async deleteDocument(authRequest: APIRequestContext, id:string) {
    const res = await authRequest.patch(
      `https://${this.domain}/document/remove?id=${id}`
    );
    expect(res.status()).toBe(200);
  }
}
