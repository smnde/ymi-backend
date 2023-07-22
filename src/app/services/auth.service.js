import { validate } from "../helpers/validation.helper.js";
import { authValidation } from "../validations/auth.validation.js";
import User from "../schemas/user.schema.js";
import { ResponseError } from "../helpers/error.helper.js";
import { generateAccessToken } from "../helpers/token.helper.js";

const login = async (request) => {
	request = validate(authValidation, request);

	const user = await User.findOne({ username: request.username }).select([
		"+password",
		"+token",
	]);
	if (!user) throw new ResponseError(400, "Username atau password salah!");

	const accessToken = await generateAccessToken({ id: user._id });

	await user.updateOne({ $set: { token: accessToken } });

	return { user: user.name, token: accessToken };
};
const logout = async (userID) => {
	const user = await User.findById(userID);
	if (!user) throw new ResponseError(404, "User tidak ditemukan!");

	return await user.update({ $set: { token: null } });
};

export default { login, logout };
