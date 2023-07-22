import mongoose from "mongoose";

const { Schema, model } = mongoose;
const VisionSchema = new Schema(
	{
		vision: { type: String, required: true },
		mision: { type: String, required: true },
	},
	{ versionKey: false, timestamps: true }
);

export default model("Vision", VisionSchema);
