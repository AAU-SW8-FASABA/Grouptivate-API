import * as v from "valibot";

export const ErrorMessageSchema = v.object({
	error: v.string(),
});
