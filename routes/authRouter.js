// External Module
const express = require("express");
const authRouter = express.Router();

// Local Module
const authController = require("../controllers/authController");

authRouter.get("/login", authController.getLogin);
authRouter.post("/login",authController.postlogin)
authRouter.post("/logout",authController.postLogout)

module.exports = authRouter;
