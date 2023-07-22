import programsService from "../services/programs.service.js";

const index = async (req, res, next) => {
	try {
		const response = await programsService.getAll();
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const show = async (req, res, next) => {
	try {
		const response = await programsService.getById(req.params.id);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const store = async (req, res, next) => {
	try {
		const response = await programsService.create(req.body);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const response = await programsService.update({
			programID: req.params.id,
			programData: req.body,
		});

		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const destroy = async (req, res, next) => {
	try {
		await programsService.remove(req.params.id);
		return res.status(200).json({ data: "OK" });
	} catch (error) {
		next(error);
	}
};

export default { index, show, store, update, destroy };
