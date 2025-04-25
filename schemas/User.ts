import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { NameSchema } from "./Name";
import { LoginSchema } from "./Login";
import type { RequestSchema } from "../containers/Request";

export const UserSchema = v.object({
  name: NameSchema,
  groups: v.array(UuidSchema),
});
export type User = v.InferOutput<typeof UserSchema>;

/**
 * REST methods
 */

const UserCreateRequestBodySchema = LoginSchema;
export const UserCreateRequestSchema: RequestSchema<
  Record<never, never>,
  typeof UserCreateRequestBodySchema,
  undefined
> = {
  searchParams: {},
  requestBody: UserCreateRequestBodySchema,
  responseBody: undefined,
};

const UserGetResponseBodySchema = UserSchema;
export const UserGetRequestSchema: RequestSchema<
  Record<never, never>,
  undefined,
  typeof UserGetResponseBodySchema
> = {
  searchParams: {},
  requestBody: undefined,
  responseBody: UserGetResponseBodySchema,
};
