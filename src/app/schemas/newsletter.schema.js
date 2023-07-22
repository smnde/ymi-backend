import mongoose from "mongoose";

const { Schema, model } = mongoose;
const NewsletterSchema = new Schema(
	{
		title: { type: String, required: true },
		slug: { type: String, required: true },
		content: { type: String, required: true },
		thumbnail: { type: String, required: false },
	},
	{ versionKey: false, timestamps: true }
);

export default model("News", NewsletterSchema);
