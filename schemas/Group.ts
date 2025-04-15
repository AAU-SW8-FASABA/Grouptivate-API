import * as v from "valibot";
import { UuidSchema } from "./Uuid";
import { NameSchema } from "./Name";
import { IntervalSchema } from "./Interval";
import { PositiveNumberSchema } from "./PositiveNumber";

export const GroupSchema = v.object({
  uuid: UuidSchema,
  name: NameSchema,
  users: v.pipe(v.array(UuidSchema), v.minLength(1)),
  interval: IntervalSchema,
  streak: PositiveNumberSchema,
});

export type Group = v.InferOutput<typeof GroupSchema>;
