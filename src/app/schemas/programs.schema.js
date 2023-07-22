import mongoose from "mongoose";

const { Schema, model } = mongoose;
const Programsschema = new Schema(
	{
		name: { type: String, required: true },
		link: { type: String, required: false },
		image: { type: String, required: false },
	},
	{ versionKey: false, timestamps: true }
);

export default model("Program", Programsschema);
