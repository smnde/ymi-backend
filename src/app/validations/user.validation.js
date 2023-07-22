import Joi from "joi";

export const createUserValidation = Joi.object({
	name: Joi.string().required(),
	username: Joi.string().required(),
	password: Joi.string().required(),
});

export const updateUserValidation = Joi.object({
	name: Joi.string().optional(),
	username: Joi.string().optional(),
	password: Joi.string().optional(),
});

export const getUserValidation = Joi.string().required();
