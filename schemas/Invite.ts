import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { UserSchema } from "./User";
import type { RequestSchema } from "../containers/Request";

export const InviteSchema = v.object({
  uuid: UuidSchema,
  group: UuidSchema,
  invited: UserSchema.entries.name,
  inviter: UserSchema.entries.name,
});
export type Invite = v.InferOutput<typeof InviteSchema>;

/**
 * REST methods
 */

const InviteCreateRequestBodySchema = v.pick(InviteSchema, [
  "group",
  "invited",
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

const InvitesGetResponseBodySchema = v.array(v.omit(InviteSchema, ["invited"]));
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
