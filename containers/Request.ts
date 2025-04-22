import { BaseIssue, BaseSchema } from "valibot";

export type SearchParametersSchema = {
  [key: string]: BaseSchema<unknown, unknown, BaseIssue<unknown>>;
};

export type RequestSchema<
  P extends SearchParametersSchema | undefined,
  R extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | undefined,
  D extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | undefined,
> = {
  /**
   * Query parameters set in the URL.
   */
  searchParams: P;
  /**
   * The data sent by the client in the request body.
   */
  requestBody: R;
  /**
   * The data sent back by the server.
   */
  responseBody: D;
};
