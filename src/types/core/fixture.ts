import type { ReadStream } from "fs";
import type { Serializable } from "playwright-core/types/structs";
import type { APIRequestContext } from "@playwright/test";

export type CaseConf = Record<string, any>;

export type Config = {
  suiteConf: Record<string, any>;
  caseConf: Record<string, any>;
};

export type FixtureApiRequestOptions = {
  url: string;
  data?: string | Buffer | Serializable;
  failOnStatusCode?: boolean;
  form?: { [key: string]: string | number | boolean };
  headers?: { [key: string]: string };
  ignoreHTTPSErrors?: boolean;
  method?: string;
  multipart?: {
    [key: string]:
      | string
      | number
      | boolean
      | ReadStream
      | {
          name: string;
          mimeType: string;
          buffer: Buffer;
        };
  };
  params?: { [key: string]: string | number | boolean };
  timeout?: number;
};

export type FixtureApiResponseHook = (response: any) => any;

export type TestApiCase = {
  url: string;
  method?: string;
  step?: string;
  request: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: Record<string, any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headers?: Record<string, any>;
  };
  response: {
    status: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  };
  type?: "json" | "text";
};

export type FixtureTokenUser = {
  username: string;
  password: string;
};

export type FixtureToken = {
  getUserToken: (options: FixtureTokenUser) => Promise<{ token: string }>;
};

