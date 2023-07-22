import express from "express";
import authController from "../controllers/auth.controller.js";
import userController from "../controllers/user.controller.js";
import newsletterController from "../controllers/newsletter.controller.js";
import visionController from "../controllers/vision.controller.js";
import programController from "../controllers/program.controller.js";
import { isLogin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Auth Route
router.post("/login", authController.login);
router.post("/logout", isLogin, authController.logout);

// User Route
router.get("/users", isLogin, userController.index);
router.get("/users/:id", isLogin, userController.show);
router.post("/users", isLogin, userController.store);
router.patch("/users/:id", isLogin, userController.update);
router.delete("/users/:id", isLogin, userController.destroy);

// Newsletter Route
router.get("/newsletters", newsletterController.index);
router.get("/newsletters/:slug", newsletterController.show);
router.post("/newsletters", isLogin, newsletterController.store);
router.patch("/newsletters/:id", isLogin, newsletterController.update);
router.delete("/newsletters/:id", isLogin, newsletterController.destroy);

// Vision Route
router.get("/visions", visionController.index);
router.post("/visions", isLogin, visionController.store);
router.patch("/visions/:id", isLogin, visionController.update);
router.delete("/visions/:id", isLogin, visionController.destroy);

// Programs Route
router.get("/programs", programController.index);
router.get("/programs/:id", programController.show);
router.post("/programs", isLogin, programController.store);
router.patch("/programs/:id", isLogin, programController.update);
router.delete("/programs/:id", isLogin, programController.destroy);

export default router;
