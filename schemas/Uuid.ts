import * as v from "valibot";

export const UuidSchema = v.pipe(v.string(), v.uuid());

export type Uuid = v.InferOutput<typeof UuidSchema>;
