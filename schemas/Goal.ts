import * as v from "valibot";
import { NameSchema } from "./Name";
import { PositiveNumberSchema } from "./PositiveNumber";
import { MetricSchema } from "./Metric";
import { UuidSchema } from "./Uuid";
import { OtherActivitySchema, SportActivitySchema } from "./Activity";

export const GoalSchema = v.object({
    title: NameSchema,
    activity: v.union([SportActivitySchema, OtherActivitySchema]),
    metric: MetricSchema,
    target: PositiveNumberSchema,
})

export type Goal = v.InferOutput<typeof GoalSchema>;

export const IndividualGoalSchema = v.object({
    ...GoalSchema.entries,
    user: UuidSchema,
    progress: PositiveNumberSchema,
})

export type IndividualGoal = v.InferOutput<typeof IndividualGoalSchema>;

export const GroupGoalSchema = v.object({
    ...GoalSchema.entries,
    group: UuidSchema,
    progress: v.record(
        UuidSchema,
        PositiveNumberSchema,
    ),
})

export type GroupGoal = v.InferOutput<typeof GroupGoalSchema>;
