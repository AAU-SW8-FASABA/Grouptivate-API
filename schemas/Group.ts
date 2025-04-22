import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { NameSchema } from "./Name";
import { IntervalSchema } from "./Interval";
import { PositiveNumberSchema } from "./PositiveNumber";
import { UserSchema } from "./User";
import type { RequestSchema } from "../containers/Request";

export const GroupSchema = v.object({
  uuid: UuidSchema,
  name: NameSchema,
  users: v.pipe(v.array(UuidSchema), v.minLength(1)),
  interval: IntervalSchema,
  streak: PositiveNumberSchema,
});
export type Group = v.InferOutput<typeof GroupSchema>;

/**
 * REST methods
 */

const GroupCreateSearchParamsSchema = {
  user: UserSchema.entries.uuid,
};
const GroupCreateRequestBodySchema = v.pick(GroupSchema, ["name", "interval"]);
const GroupCreateResponseBodySchema = v.pick(GroupSchema, ["uuid"]);
export const GroupCreateRequestSchema: RequestSchema<
  typeof GroupCreateSearchParamsSchema,
  typeof GroupCreateRequestBodySchema,
  typeof GroupCreateResponseBodySchema
> = {
  searchParams: GroupCreateSearchParamsSchema,
  requestBody: GroupCreateRequestBodySchema,
  responseBody: GroupCreateResponseBodySchema,
};

const GroupGetSearchParamsSchema = {
  uuid: GroupSchema.entries.uuid,
};
const GroupGetResponseBodySchema = v.omit(GroupSchema, ["uuid"]);
export const GroupGetRequestSchema: RequestSchema<
  typeof GroupGetSearchParamsSchema,
  undefined,
  typeof GroupGetResponseBodySchema
> = {
  searchParams: GroupGetSearchParamsSchema,
  requestBody: undefined,
  responseBody: GroupGetResponseBodySchema,
};

const GroupRemoveSearchParamsSchema = {
  user: UserSchema.entries.uuid,
};
const GroupRemoveRequestBodySchema = v.object({
  group: GroupSchema.entries.uuid,
});
export const GroupRemoveRequestSchema: RequestSchema<
  typeof GroupRemoveSearchParamsSchema,
  typeof GroupRemoveRequestBodySchema,
  undefined
> = {
  searchParams: GroupRemoveSearchParamsSchema,
  requestBody: GroupRemoveRequestBodySchema,
  responseBody: undefined,
};
