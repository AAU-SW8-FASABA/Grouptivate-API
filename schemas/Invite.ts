import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { UserSchema } from "./User";
import type { RequestSchema } from "../containers/Request";

export const InviteSchema = v.object({
  inviteId: UuidSchema,
  groupId: UuidSchema,
  inviteeName: UserSchema.entries.name,
  inviterId: UserSchema.entries.userId,
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
  v.omit(InviteSchema, ["inviteeName"]),
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

const InviteRespondSearchParamsSchema = {
  invite: InviteSchema.entries.inviteId,
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
