import * as v from 'valibot';
import { UuidSchema } from './Uuid';
import { NameSchema } from './Name';
import { PasswordSchema } from './Password';
import type { RequestSchema } from '../containers/Request';

/**
 * REST methods
 */

export const TokenSchema = v.object({
    token: v.string(),
});
export type Token = v.InferOutput<typeof TokenSchema>;

const LoginRequestBodySchema = v.object({
    name: NameSchema,
    password: PasswordSchema,
});

export const LoginRequestSchema: RequestSchema<
    Record<never, never>,
    typeof LoginRequestBodySchema,
    undefined
> = {
    searchParams: {},
    requestBody: LoginRequestBodySchema,
    responseBody: undefined,
};
