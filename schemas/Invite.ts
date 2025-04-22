import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { UserSchema } from "./User";
import type { RequestSchema } from "../containers/Request";

export const InviteSchema = v.object({
  uuid: UuidSchema,
  group: UuidSchema,
  invited: UuidSchema,
  invitee: UuidSchema,
});
export type Invite = v.InferOutput<typeof InviteSchema>;

/**
 * REST methods
 */

const InviteCreateSearchParamsSchema = {
  user: v.pick(UserSchema, ["uuid"]),
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
  user: v.pick(UserSchema, ["uuid"]),
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
