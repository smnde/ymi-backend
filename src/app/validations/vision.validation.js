import Joi from "joi";

export const createVisionValidation = Joi.object({
	vision: Joi.string().required(),
	mision: Joi.string().required(),
});

export const updateVisionValidation = Joi.object({
	vision: Joi.string().optional(),
	mision: Joi.string().optional(),
});

export const getVisionValidation = Joi.string().required();
