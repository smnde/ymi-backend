import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes/api.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(errorMiddleware);
app.use("/api", routes);

export default app;
