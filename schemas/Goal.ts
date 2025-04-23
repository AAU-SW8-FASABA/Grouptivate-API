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
const IndividualGoalCreateRequestBodySchema = v.omit(GoalSchema, [
  "uuid",
  "group",
]);
const IndividualGoalCreateResponseBodySchema = v.pick(GoalSchema, ["uuid"]);
export const IndividualGoalCreateRequestSchema: RequestSchema<
  typeof IndividualGoalCreateSearchParamsSchema,
  typeof IndividualGoalCreateRequestBodySchema,
  typeof IndividualGoalCreateResponseBodySchema
> = {
  searchParams: IndividualGoalCreateSearchParamsSchema,
  requestBody: IndividualGoalCreateRequestBodySchema,
  responseBody: IndividualGoalCreateResponseBodySchema,
};

const GroupGoalCreateCreateSearchParamsSchema = {
  group: GroupSchema.entries.uuid,
};
const GroupGoalCreateCreateRequestBodySchema = v.omit(GoalSchema, [
  "uuid",
  "group",
]);
export const GroupGoalCreateCreateRequestSchema: RequestSchema<
  typeof GroupGoalCreateCreateSearchParamsSchema,
  typeof GroupGoalCreateCreateRequestBodySchema,
  undefined
> = {
  searchParams: GroupGoalCreateCreateSearchParamsSchema,
  requestBody: GroupGoalCreateCreateRequestBodySchema,
  responseBody: undefined,
};
