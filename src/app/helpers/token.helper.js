import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const accessTokenKey = process.env.ACCESS_TOKEN_KEY;

export const generateAccessToken = async (payload) => {
	return await jwt.sign(payload, accessTokenKey, { expiresIn: "1d" });
};
