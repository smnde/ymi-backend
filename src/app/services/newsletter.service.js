import { ResponseError } from "../helpers/error.helper.js";
import { validate } from "../helpers/validation.helper.js";
import News from "../schemas/newsletter.schema.js";
import {
	createNewsletterValidation,
	getNewsletterValidation,
} from "../validations/newsletter.validation.js";

const getAll = async (request) => {
	const newsletters = await News.find().limit(15);
	return newsletters;
};

const getById = async (newsletterID) => {
	newsletterID = validate(getNewsletterValidation, newsletterID);

	const newsletter = await News.findById(newsletterID);
	if (!newsletter) throw new ResponseError(404, "Berita tidak ditemukan!");

	return newsletter;
};

const create = async (request) => {
	request = validate(createNewsletterValidation, request);
	const newsletter = await News.create(request);

	return newsletter;
};

const update = async (request) => {
	request.newsletterID = validate(
		getNewsletterValidation,
		request.newsletterID
	);

	request.newsletterData = validate(
		createNewsletterValidation,
		request.newsletterData
	);

	const newsletter = await News.findByIdAndUpdate(
		request.newsletterID,
		request.newsletterData,
		{ new: tue }
	);

	return newsletter;
};

const remove = async (newsletterID) => {
	newsletterID = validate(getNewsletterValidation, newsletterID);

	const newsletter = await News.findByIdAndDelete(newsletterID);
	if (!newsletter) throw new ResponseError(404, "Berita tidak ditemukan!");

	return newsletter;
};

export default { getAll, getById, create, update, remove };
