import * as v from "valibot";
import { NameSchema } from "./Name";
import { PasswordSchema } from "./Password";
import type { RequestSchema } from "../containers/Request";

export const LoginSchema = v.object({
  name: NameSchema,
  password: PasswordSchema,
});
export type Login = v.InferOutput<typeof LoginSchema>;

/**
 * REST methods
 */

const LoginRequestBodySchema = LoginSchema;
export const LoginRequestSchema: RequestSchema<
  Record<never, never>,
  typeof LoginRequestBodySchema,
  undefined
> = {
  searchParams: {},
  requestBody: LoginRequestBodySchema,
  responseBody: undefined,
};
