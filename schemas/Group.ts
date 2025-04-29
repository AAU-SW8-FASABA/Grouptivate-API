import * as v from 'valibot';
import { UuidSchema } from './Uuid';
import { NameSchema } from './Name';
import { IntervalSchema } from './Interval';
import { GoalSchema } from './Goal';
import { PositiveNumberSchema } from './PositiveNumber';
import type { RequestSchema } from '../containers/Request';

export const GroupSchema = v.object({
    groupId: UuidSchema,
    groupName: NameSchema,
    users: v.pipe(v.map(UuidSchema, NameSchema), v.minSize(1)),
    interval: IntervalSchema,
    goals: v.array(GoalSchema),
    streak: PositiveNumberSchema,
});
export type Group = v.InferOutput<typeof GroupSchema>;

/**
 * REST methods
 */

const GroupCreateRequestBodySchema = v.pick(GroupSchema, [
    'groupName',
    'interval',
]);
const GroupCreateResponseBodySchema = v.pick(GroupSchema, ['groupId']);
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
    groupId: GroupSchema.entries.groupId,
};
const GroupGetResponseBodySchema = v.omit(GroupSchema, ['groupId']);
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
    userId: UuidSchema,
    groupId: GroupSchema.entries.groupId,
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
