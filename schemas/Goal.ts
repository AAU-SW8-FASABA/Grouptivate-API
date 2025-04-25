import * as v from "valibot";
import { NameSchema } from "./Name";
import { PositiveNumberSchema } from "./PositiveNumber";
import { MetricSchema } from "./Metric";
import { UuidSchema } from "./Uuid";
import { OtherActivitySchema, SportActivitySchema } from "./Activity";
import type { RequestSchema } from "../containers/Request";

export enum GoalType {
  Individual = "individual",
  Group = "group",
}

export const GoalSchema = v.object({
  uuid: UuidSchema,
  type: v.enum(GoalType),
  title: NameSchema,
  activity: v.union([SportActivitySchema, OtherActivitySchema]),
  metric: MetricSchema,
  target: PositiveNumberSchema,
  progress: v.record(NameSchema, PositiveNumberSchema),
});
export type Goal = v.InferOutput<typeof GoalSchema>;

/**
 * REST methods
 */

const GoalCreateSearchParamsSchema = {
  group: UuidSchema,
  user: UuidSchema,
};
const GoalCreateRequestBodySchema = v.omit(GoalSchema, ["uuid", "progress"]);
const GoalCreateResponseBodySchema = v.pick(GoalSchema, ["uuid"]);
export const GoalCreateRequestSchema: RequestSchema<
  typeof GoalCreateSearchParamsSchema,
  typeof GoalCreateRequestBodySchema,
  typeof GoalCreateResponseBodySchema
> = {
  searchParams: GoalCreateSearchParamsSchema,
  requestBody: GoalCreateRequestBodySchema,
  responseBody: GoalCreateResponseBodySchema,
};

const GoalPatchRequestBodySchema = v.array(
  v.object({
    uuid: GoalSchema.entries.uuid,
    progress: GoalSchema.entries.progress.value,
  }),
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
