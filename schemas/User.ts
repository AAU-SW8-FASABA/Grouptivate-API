import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { NameSchema } from "./Name";
import { LoginSchema } from "./Login";
import { TokenSchema } from "./Token";
import type { RequestSchema } from "../containers/Request";

export const UserSchema = v.object({
  userId: UuidSchema,
  name: NameSchema,
  groups: v.array(UuidSchema),
});
export type User = v.InferOutput<typeof UserSchema>;

/**
 * REST methods
 */

const UserCreateRequestBodySchema = LoginSchema;
const UserCreateResponseBodySchema = v.object({
  token: TokenSchema,
});
export const UserCreateRequestSchema: RequestSchema<
  Record<never, never>,
  typeof UserCreateRequestBodySchema,
  typeof UserCreateResponseBodySchema
> = {
  searchParams: {},
  requestBody: UserCreateRequestBodySchema,
  responseBody: UserCreateResponseBodySchema,
};

const UserGetResponseBodySchema = v.omit(UserSchema, ["userId"]);
export const UserGetRequestSchema: RequestSchema<
  Record<never, never>,
  undefined,
  typeof UserGetResponseBodySchema
> = {
  searchParams: {},
  requestBody: undefined,
  responseBody: UserGetResponseBodySchema,
};
