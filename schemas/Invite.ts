import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { UserSchema } from "./User";
import { GroupSchema } from "./Group";
import type { RequestSchema } from "../containers/Request";

export const InviteSchema = v.object({
	inviteId: UuidSchema,
	groupId: UuidSchema,
	groupName: GroupSchema.entries.groupName,
	inviteeName: UserSchema.entries.name,
	inviterName: UserSchema.entries.name,
});
export type Invite = v.InferOutput<typeof InviteSchema>;

/**
 * REST methods
 */

const InviteCreateRequestBodySchema = v.pick(InviteSchema, [
	"groupId",
	"inviteeName",
]);
export const InviteCreateRequestSchema: RequestSchema<
	Record<never, never>,
	typeof InviteCreateRequestBodySchema,
	undefined
> = {
	searchParams: {},
	requestBody: InviteCreateRequestBodySchema,
	responseBody: undefined,
};

const InvitesGetResponseBodySchema = v.array(
	v.omit(InviteSchema, ["inviteeName", "groupId"]),
);
export const InviteGetRequestSchema: RequestSchema<
	Record<never, never>,
	undefined,
	typeof InvitesGetResponseBodySchema
> = {
	searchParams: {},
	requestBody: undefined,
	responseBody: InvitesGetResponseBodySchema,
};

const InviteDeleteSearchParamsSchema = {
	inviteId: InviteSchema.entries.inviteId,
};
export const InviteDeleteRequestSchema: RequestSchema<
	typeof InviteDeleteSearchParamsSchema,
	undefined,
	undefined
> = {
	searchParams: InviteDeleteSearchParamsSchema,
	requestBody: undefined,
	responseBody: undefined,
};

const InviteRespondSearchParamsSchema = {
	inviteId: InviteSchema.entries.inviteId,
};
const InviteRespondRequestBodySchema = v.object({ accepted: v.boolean() });
export const InviteRespondRequestSchema: RequestSchema<
	typeof InviteRespondSearchParamsSchema,
	typeof InviteRespondRequestBodySchema,
	undefined
> = {
	searchParams: InviteRespondSearchParamsSchema,
	requestBody: InviteRespondRequestBodySchema,
	responseBody: undefined,
};
