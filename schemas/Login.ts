import * as v from 'valibot';
import { NameSchema } from './Name';
import { PasswordSchema } from './Password';
import type { RequestSchema } from '../containers/Request';

/**
 * REST methods
 */

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
