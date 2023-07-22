import CryptoJS from "crypto-js";
import { config } from "dotenv";

config();

const passwordKey = process.env.PASSWORD_KEY;

export const encryptPassword = (payload) => {
	return CryptoJS.AES.encrypt(payload, passwordKey).toString();
};

export const verifyPassword = (encryptPassword) => {
	return CryptoJS.AES.decrypt(encryptPassword, passwordKe).toString(
		CryptoJS.enc.Utf16
	);
};
