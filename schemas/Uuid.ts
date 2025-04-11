import * as v from "valibot";

export const UuidSchema = v.pipe(v.string(), v.length(24));

export type Uuid = v.InferOutput<typeof UuidSchema>;
