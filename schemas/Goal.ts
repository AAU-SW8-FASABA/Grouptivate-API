import * as v from "valibot";
import { NameSchema } from "./Name";
import { PositiveNumberSchema } from "./PositiveNumber";
import { MetricSchema } from "./Metric";
import { UuidSchema } from "./Uuid";
import { OtherActivitySchema, SportActivitySchema } from "./Activity";
import { UserSchema } from "./User";
import { GroupSchema } from "./Group";
import { RequestSchema } from "../containers/Request";

export const GoalSchema = v.object({
  uuid: UuidSchema,
  title: NameSchema,
  activity: v.union([SportActivitySchema, OtherActivitySchema]),
  metric: MetricSchema,
  target: PositiveNumberSchema,
  group: UuidSchema,
});
export type Goal = v.InferOutput<typeof GoalSchema>;

export const IndividualGoalSchema = v.object({
  ...GoalSchema.entries,
  user: UuidSchema,
  progress: PositiveNumberSchema,
});
export type IndividualGoal = v.InferOutput<typeof IndividualGoalSchema>;

export const GroupGoalSchema = v.object({
  ...GoalSchema.entries,
  progress: v.record(UuidSchema, PositiveNumberSchema),
});
export type GroupGoal = v.InferOutput<typeof GroupGoalSchema>;

/**
 * REST methods
 */

const IndividualGoalCreateSearchParamsSchema = {
  user: UserSchema.entries.uuid,
  group: GroupSchema.entries.uuid,
};
const IndividualGoalCreateRequestBodySchema = v.omit(IndividualGoalSchema, [
  "uuid",
  "group",
  "progress",
]);
const IndividualGoalCreateResponseBodySchema = v.pick(IndividualGoalSchema, [
  "uuid",
]);
export const IndividualGoalCreateRequestSchema: RequestSchema<
  typeof IndividualGoalCreateSearchParamsSchema,
  typeof IndividualGoalCreateRequestBodySchema,
  typeof IndividualGoalCreateResponseBodySchema
> = {
  searchParams: IndividualGoalCreateSearchParamsSchema,
  requestBody: IndividualGoalCreateRequestBodySchema,
  responseBody: IndividualGoalCreateResponseBodySchema,
};

const GroupGoalCreateSearchParamsSchema = {
  user: UserSchema.entries.uuid,
  group: GroupSchema.entries.uuid,
};
const GroupGoalCreateRequestBodySchema = v.omit(GroupGoalSchema, [
  "uuid",
  "group",
  "progress",
]);
const GroupGoalCreateResponseBodySchema = v.pick(GroupGoalSchema, ["uuid"]);
export const GroupGoalCreateRequestSchema: RequestSchema<
  typeof GroupGoalCreateSearchParamsSchema,
  typeof GroupGoalCreateRequestBodySchema,
  typeof GroupGoalCreateResponseBodySchema
> = {
  searchParams: GroupGoalCreateSearchParamsSchema,
  requestBody: GroupGoalCreateRequestBodySchema,
  responseBody: GroupGoalCreateResponseBodySchema,
};

const GoalDeleteSearchParamsSchema = {
  user: UserSchema.entries.uuid,
};
const GoalDeleteRequestBodySchema = v.omit(GoalSchema, ["uuid"]);
export const GoalDeleteRequestSchema: RequestSchema<
  typeof GoalDeleteSearchParamsSchema,
  typeof GoalDeleteRequestBodySchema,
  undefined
> = {
  searchParams: GoalDeleteSearchParamsSchema,
  requestBody: GoalDeleteRequestBodySchema,
  responseBody: undefined,
};
