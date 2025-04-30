import * as v from "valibot";
import { NameSchema } from "./Name";
import { PasswordSchema } from "./Password";
import { TokenSchema } from "./Token";
import type { RequestSchema } from "../containers/Request";
import { UuidSchema } from "./Uuid";

export const LoginSchema = v.object({
	name: NameSchema,
	password: PasswordSchema,
});
export type Login = v.InferOutput<typeof LoginSchema>;

/**
 * REST methods
 */

const LoginRequestBodySchema = LoginSchema;
const LoginResponseBodySchema = v.object({
	token: TokenSchema,
	userId: UuidSchema,
});
export const LoginRequestSchema: RequestSchema<
	Record<never, never>,
	typeof LoginRequestBodySchema,
	typeof LoginResponseBodySchema
> = {
	searchParams: {},
	requestBody: LoginRequestBodySchema,
	responseBody: LoginResponseBodySchema,
};

const VerifyRequestBodySchema = v.object({
	token: TokenSchema,
});
export const VerifyRequestSchema: RequestSchema<
	Record<never, never>,
	typeof VerifyRequestBodySchema,
	undefined
> = {
	searchParams: {},
	requestBody: VerifyRequestBodySchema,
	responseBody: undefined,
};
