import newsletterService from "../services/newsletter.service.js";

const index = async (req, res, next) => {
	try {
		const response = await newsletterService.getAll();
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const show = async (req, res, next) => {
	try {
		const response = await newsletterService.getById(req.params.id);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const store = async (req, res, next) => {
	try {
		const response = await newsletterService.create(req.body);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const response = await newsletterService.update({
			newsletterID: req.params.id,
			newsletterData: req.body,
		});

		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const destroy = async (req, res, next) => {
	try {
		await newsletterService.remove(req.params.id);
		return res.status(200).json({ data: "OK" });
	} catch (error) {
		next(error);
	}
};

export default { index, show, store, update, destroy };
