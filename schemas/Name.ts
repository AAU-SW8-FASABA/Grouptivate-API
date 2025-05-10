import * as v from "valibot";

const NAME_MAX_LENGTH = 30;
const NAME_MIN_LENGTH = 1;

export const NameSchema = v.pipe(
	v.string(),
	v.maxLength(NAME_MAX_LENGTH),
	v.minLength(NAME_MIN_LENGTH),
);

export type Name = v.InferOutput<typeof NameSchema>;
