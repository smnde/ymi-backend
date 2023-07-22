import Joi from "joi";

export const createProgramValidation = Joi.object({
	name: Joi.string().required(),
	link: Joi.string().optional(),
});

export const updateProgramValidation = Joi.object({
	name: Joi.string().optional(),
	link: Joi.string().optional(),
});

export const getProgramValidation = Joi.string().required();
