import User from "../schemas/user.schema.js";

export const isLogin = async (req, res, next) => {
	const token = req.get("Authorization");
	if (!token) return res.status(401).json({ error: "Unauthorized!" }).end();

	const user = await User.findOne({ token: token });
	if (!user) {
		return res.status(400).json({ error: "Unauthorized!" }).end();
	}

	req.user = user;
	next();
};
