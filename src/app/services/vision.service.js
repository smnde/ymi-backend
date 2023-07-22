import { ResponseError } from "../helpers/error.helper.js";
import { validate } from "../helpers/validation.helper.js";
import Vision from "../schemas/vision.schema.js";
import {
	createVisionValidation,
	getVisionValidation,
	updateVisionValidation,
} from "../validations/vision.validation.js";

const getAll = async (request) => {
	const visions = await Vision.find();
	return visions;
};

const create = async (request) => {
	request = validate(createVisionValidation, request);

	const vision = await Vision.create(request);
	if (!vision) throw new ResponseError(404, "Data tidak ditemukan!");

	return vision;
};

const update = async (request) => {
	request.visionID = validate(getVisionValidation, request.visionID);
	request.visionData = validate(updateVisionValidation, request.visionData);

	const vision = await Vision.findByIdAndUpdate(
		request.visionID,
		request.visionData,
		{ new: true }
	);

	return vision;
};

const remove = async (visionID) => {
	visionID = validate(getVisionValidation, visionID);

	const vision = await Vision.findOneAndDelete(visionID);
	if (!vision) throw new ResponseError(404, "Data tidak ditemukan!");

	return vision;
};
export default { getAll, create, update, remove };
