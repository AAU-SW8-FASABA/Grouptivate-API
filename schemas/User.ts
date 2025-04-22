import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { NameSchema } from "./Name";
import type { RequestSchema } from "../containers/Request";

export const UserSchema = v.object({
  uuid: UuidSchema,
  name: NameSchema,
  groups: v.array(UuidSchema),
});
export type User = v.InferOutput<typeof UserSchema>;

/**
 * REST methods
 */

const UserCreateRequestBodySchema = v.pick(UserSchema, ["name"]);
const UserCreateResponseBodySchema = v.pick(UserSchema, ["uuid"]);
export const UserCreateRequestSchema: RequestSchema<
  Record<never, never>,
  typeof UserCreateRequestBodySchema,
  typeof UserCreateResponseBodySchema
> = {
  searchParams: {},
  requestBody: UserCreateRequestBodySchema,
  responseBody: UserCreateResponseBodySchema,
};

const UserGetSearchParamsSchema = {
  uuid: v.pick(UserSchema, ["uuid"]),
};
const UserGetResponseBodySchema = v.omit(UserSchema, ["uuid"]);
export const UserGetRequestSchema: RequestSchema<
  typeof UserGetSearchParamsSchema,
  undefined,
  typeof UserGetResponseBodySchema
> = {
  searchParams: UserGetSearchParamsSchema,
  requestBody: undefined,
  responseBody: UserGetResponseBodySchema,
};
