import * as v from "valibot";

export const PositiveNumberSchema = v.pipe(v.number(), v.gtValue(0));

export type PositiveNumber = v.InferOutput<typeof PositiveNumberSchema>;
