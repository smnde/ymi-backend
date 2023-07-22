import express from "express";
import authController from "../controllers/auth.controller.js";
import userController from "../controllers/user.controller.js";
import newsletterController from "../controllers/newsletter.controller.js";
import visionController from "../controllers/vision.controller.js";
import programController from "../controllers/program.controller.js";

const router = express.Router();

// Auth Route
router.post("/login", authController.login);
router.post("/logout", authController.logout);

// User Route
router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);
router.patch("/users/:id", userController.update);
router.delete("/users/:id", userController.destroy);

// Newsletter Route
router.get("/newsletters", newsletterController.index);
router.get("/newsletters/:slug", newsletterController.show);
router.post("/newsletters", newsletterController.store);
router.patch("/newsletters/:id", newsletterController.update);
router.delete("/newsletters/:id", newsletterController.destroy);

// Vision Route
router.get("/visions", visionController.index);
router.post("/visions", visionController.store);
router.patch("/visions/:id", visionController.update);
router.delete("/visions/:id", visionController.destroy);

// Programs Route
router.get("/programs", programController.index);
router.post("/programs", programController.store);
router.patch("/programs/:id", programController.update);
router.delete("/programs/:id", programController.destroy);

export default router;
