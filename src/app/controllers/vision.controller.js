import visionService from "../services/vision.service.js";

const index = async (req, res, next) => {
	try {
		const response = await visionService.getAll();
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const store = async (req, res, next) => {
	try {
		const response = await visionService.create(req.body);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const response = await visionService.update({
			visionID: req.params.id,
			visionData: req.body,
		});

		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const destroy = async (req, res, next) => {
	try {
		await visionService.remove(req.params.id);
		return res.status(200).json({ data: "OK" });
	} catch (error) {
		next(error);
	}
};

export default { index, store, update, destroy };
