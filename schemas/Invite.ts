import * as v from "valibot";
import { UuidSchema } from "./Uuid";

export const InviteSchema = v.object({
  user: UuidSchema,
  group: UuidSchema,
});

export type Invite = v.InferOutput<typeof InviteSchema>;
