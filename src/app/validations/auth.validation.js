import Joi from "joi";

export const authValidation = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
});
