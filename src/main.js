import app from "./app/app.js";
import http from "http";
import mongoose from "mongoose";
import { config } from "dotenv";

config();

// create server
const server = http.createServer(app);
const dbURI = process.env.DB_URI;
const port = process.env.PORT;

mongoose.set("strictQuery", false);

// connect to mongodb
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(dbURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

// Connect to the database before listening
connectDB().then(
	server.listen(port, () => {
		console.log(`Listening for requests ${port}`);
	})
);
