import userService from "../services/user.service.js";

const index = async (req, res, next) => {
	try {
		const response = await userService.getAll();
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const show = async (req, res, next) => {
	try {
		const response = await userService.getById(req.params.id);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const store = async (req, res, next) => {
	try {
		const response = await userService.create(req.body);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const response = await userService.update({
			userID: req.params.id,
			userData: req.body,
		});

		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const destroy = async (req, res, next) => {
	try {
		await userService.remove(req.params.id);
		return res.status(200).json({ data: "OK" });
	} catch (error) {
		next(error);
	}
};

export default { index, show, store, update, destroy };
