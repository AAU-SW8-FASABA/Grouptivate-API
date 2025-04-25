import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { NameSchema } from "./Name";
import { IntervalSchema } from "./Interval";
import { GoalSchema } from "./Goal";
import { PositiveNumberSchema } from "./PositiveNumber";
import type { RequestSchema } from "../containers/Request";

export const GroupSchema = v.object({
  uuid: UuidSchema,
  name: NameSchema,
  users: v.pipe(v.array(UuidSchema), v.minLength(1)),
  interval: IntervalSchema,
  goals: v.array(GoalSchema),
  streak: PositiveNumberSchema,
});
export type Group = v.InferOutput<typeof GroupSchema>;

/**
 * REST methods
 */

const GroupCreateRequestBodySchema = v.pick(GroupSchema, ["name", "interval"]);
const GroupCreateResponseBodySchema = v.pick(GroupSchema, ["uuid"]);
export const GroupCreateRequestSchema: RequestSchema<
  Record<never, never>,
  typeof GroupCreateRequestBodySchema,
  typeof GroupCreateResponseBodySchema
> = {
  searchParams: {},
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

const GroupRemoveRequestBodySchema = v.object({
  user: NameSchema,
  group: GroupSchema.entries.uuid,
});
export const GroupRemoveRequestSchema: RequestSchema<
  Record<never, never>,
  typeof GroupRemoveRequestBodySchema,
  undefined
> = {
  searchParams: {},
  requestBody: GroupRemoveRequestBodySchema,
  responseBody: undefined,
};
