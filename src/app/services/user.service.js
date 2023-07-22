import { ResponseError } from "../helpers/error.helper.js";
import { encryptPassword } from "../helpers/password.helper.js";
import { validate } from "../helpers/validation.helper.js";
import User from "../schemas/user.schema.js";
import {
	createUserValidation,
	getUserValidation,
	updateUserValidation,
} from "../validations/user.validation.js";

const getAll = async (request) => {
	const users = await User.find().limit(15).sort({ name: 1 });
	return users;
};

const getById = async (userID) => {
	userID = validate(getUserValidation, userID);

	const user = await User.findById(userID);
	if (!user) throw new ResponseError(404, "User tidak ditemukan!");

	return user;
};

const create = async (request) => {
	request = validate(createUserValidation, request);

	request.password = encryptPassword(request.password);
	const user = await User.create(request);

	const { password, ...data } = user._doc;
	return data;
};

const update = async (request) => {
	request.userID = validate(getUserValidation, request.userID);
	request.userData = validate(updateUserValidation, request.userData);

	const user = await User.findByIdAndUpdate(
		request.userData,
		request.userData,
		{ new: true }
	);

	return user;
};

const remove = async (userID) => {
	userID = validate(getUserValidation, userID);

	const user = await User.findByIdAndDelete(userID);
	if (!user) throw new ResponseError(404, "User tidak ditemukan!");

	return user;
};

export default { getAll, getById, create, update, remove };
