import { ResponseError } from "../helpers/error.helper.js";
import { validate } from "../helpers/validation.helper.js";
import Program from "../schemas/programs.schema.js";
import {
	createProgramValidation,
	getProgramValidation,
	updateProgramValidation,
} from "../validations/program.validation.js";

const getAll = async (request) => {
	const programs = await Program.find();
	return programs;
};

const getById = async (programID) => {
	programID = validate(getProgramValidation, programID);

	const program = await Program.findById(programID);
	if (!program) throw new ResponseError(404, "Program tidak ditemukan!");

	return program;
};

const create = async (request) => {
	request = validate(createProgramValidation, request);
	const program = await Program.create(request);

	return program;
};

const update = async (request) => {
	request.programID = validate(getProgramValidation, request.programID);
	request.programData = validate(updateProgramValidation, request.programData);

	const program = await Program.findByIdAndUpdate(
		request.programID,
		request.programData,
		{ new: true }
	);

	return program;
};

const remove = async (programID) => {
	programID = validate(getProgramValidation, programID);

	const program = await Program.findByIdAndDelete(programID);
	if (!program) throw new ResponseError(404, "Program tidak ditemukan!");

	return program;
};

export default { getAll, getById, create, update, remove };
