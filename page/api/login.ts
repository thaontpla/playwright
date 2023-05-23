import { expect, APIRequestContext } from "@playwright/test";

export class LoginAPI {
    domain: string
    constructor(domain: string) {     
        this.domain=domain
    }

    /**
     * Get access token
     * @returns token
     */
    async getToken(request: APIRequestContext) {
        const res = await request.post(
            `https://${this.domain}/sign-in`,
            {
              data: {
                username: "thaontp.la@gmail.com",
                password: "123456",
              },
            }
          );
          expect(res.status()).toBe(200);
          const resBody = await res.json();
          return resBody.token
    }
}