import * as v from "valibot";

const NAME_MAX_LENGTH = 30;


export const NameSchema = v.pipe(v.string(), v.maxLength(NAME_MAX_LENGTH));

export type Name = v.InferOutput<typeof NameSchema>;
