import * as v from "valibot";
import { NameSchema } from "./Name";
import { PositiveNumberSchema } from "./PositiveNumber";
import { MetricSchema } from "./Metric";
import { UuidSchema } from "./Uuid";
import { OtherActivitySchema, SportActivitySchema } from "./Activity";
import type { RequestSchema } from "../containers/Request";

export const GoalSchema = v.object({
  uuid: UuidSchema,
  title: NameSchema,
  activity: v.union([SportActivitySchema, OtherActivitySchema]),
  metric: MetricSchema,
  target: PositiveNumberSchema,
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
  group: UuidSchema,
};
const IndividualGoalCreateRequestBodySchema = v.omit(IndividualGoalSchema, [
  "uuid",
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
  group: UuidSchema,
};
const GroupGoalCreateRequestBodySchema = v.omit(GroupGoalSchema, [
  "uuid",
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

const GoalPatchRequestBodySchema = v.array(
  v.pick(IndividualGoalSchema, ["uuid", "progress"]),
);
export const GoalPatchRequestSchema: RequestSchema<
  Record<never, never>,
  typeof GoalPatchRequestBodySchema,
  undefined
> = {
  searchParams: {},
  requestBody: GoalPatchRequestBodySchema,
  responseBody: undefined,
};

const GoalDeleteRequestBodySchema = v.pick(GoalSchema, ["uuid"]);
export const GoalDeleteRequestSchema: RequestSchema<
  Record<never, never>,
  typeof GoalDeleteRequestBodySchema,
  undefined
> = {
  searchParams: {},
  requestBody: GoalDeleteRequestBodySchema,
  responseBody: undefined,
};
