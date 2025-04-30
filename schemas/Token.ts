import * as v from "valibot";

export const TokenSchema = v.pipe(v.string(), v.length(64));

export type Token = v.InferOutput<typeof TokenSchema>;
