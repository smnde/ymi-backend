import mongoose from "mongoose";

const { Schema, model } = mongoose;
const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
		token: { type: String, select: false },
	},
	{ versionKey: false, timestamps: true }
);

export default model("User", UserSchema);
