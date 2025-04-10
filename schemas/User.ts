import * as v from 'valibot';
import { UuidSchema } from './Uuid';
import { NameSchema } from './Name';

export const UserSchema = v.object({
    uuid: UuidSchema,
    name: NameSchema,
    groups: v.array(UuidSchema),
});

export type User = v.InferOutput<typeof UserSchema>;
