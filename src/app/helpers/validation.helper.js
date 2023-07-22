import { ResponseError } from "./error.helper.js";

export const validate = (schema, request) => {
	const result = schema.validate(request, {
		abortEaryly: false,
		allowUnknown: false,
	});

	if (result.error) {
		throw new ResponseError(400, result.error.message);
	} else {
		return result.value;
	}
};
