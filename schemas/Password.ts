import * as v from "valibot";

export const PasswordSchema = v.pipe(
	v.string(),
	v.minLength(8, "Your password is too short."),
	v.maxLength(30, "Your password is too long."),
	v.regex(/[a-z]/, "Your password must contain a lowercase letter."),
	v.regex(/[A-Z]/, "Your password must contain a uppercase letter."),
	v.regex(/[0-9]/, "Your password must contain a number."),
);

export type Password = v.InferOutput<typeof PasswordSchema>;
