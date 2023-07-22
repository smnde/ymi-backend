import Joi from "joi";

export const createNewsletterValidation = Joi.object({
	title: Joi.string().required(),
	content: Joi.string().required(),
});

export const getNewsletterValidation = Joi.string().required();
