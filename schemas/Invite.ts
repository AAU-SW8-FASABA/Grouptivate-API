import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { UserSchema } from "./User";
import type { RequestSchema } from "../containers/Request";

export const InviteSchema = v.object({
  uuid: UuidSchema,
  group: UuidSchema,
  invited: UuidSchema,
  inviter: UuidSchema,
});
export type Invite = v.InferOutput<typeof InviteSchema>;

/**
 * REST methods
 */

const InviteCreateSearchParamsSchema = {
  user: UserSchema.entries.uuid,
};
const InviteCreateRequestBodySchema = v.pick(InviteSchema, [
  "group",
  "invited",
]);
export const InviteCreateRequestSchema: RequestSchema<
  typeof InviteCreateSearchParamsSchema,
  typeof InviteCreateRequestBodySchema,
  undefined
> = {
  searchParams: InviteCreateSearchParamsSchema,
  requestBody: InviteCreateRequestBodySchema,
  responseBody: undefined,
};

const InvitesGetSearchParamsSchema = {
  user: UserSchema.entries.uuid,
};
const InvitesGetResponseBodySchema = v.array(v.omit(InviteSchema, ["invited"]));
export const InviteGetRequestSchema: RequestSchema<
  typeof InvitesGetSearchParamsSchema,
  undefined,
  typeof InvitesGetResponseBodySchema
> = {
  searchParams: InvitesGetSearchParamsSchema,
  requestBody: undefined,
  responseBody: InvitesGetResponseBodySchema,
};

const InviteRespondSearchParamsSchema = {
  user: UserSchema.entries.uuid,
  invite: InviteSchema.entries.uuid,
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
