import * as v from "valibot";
import { NameSchema } from "./Name";
import { PasswordSchema } from "./Password";
import { TokenSchema } from "./Token";
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
const LoginResponseBodySchema = v.object({
  token: TokenSchema,
});
export const LoginRequestSchema: RequestSchema<
  Record<never, never>,
  typeof LoginRequestBodySchema,
  typeof LoginResponseBodySchema
> = {
  searchParams: {},
  requestBody: LoginRequestBodySchema,
  responseBody: LoginResponseBodySchema,
};
