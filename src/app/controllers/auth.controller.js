import authService from "../services/auth.service.js";

const login = async (req, res, next) => {
	try {
		const response = await authService.login(req.body);
		return res.status(200).json({ data: response });
	} catch (error) {
		next(error);
	}
};

const logout = async (req, res, next) => {
	try {
		await authService.logout(req.user._id);
		return res.status(200).json({ data: "OK" });
	} catch (error) {
		next(error);
	}
};

export default { login, logout };
