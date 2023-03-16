const express = require("express");
const logInController = require("../controllers/logInController");
const logInRouter = express.Router();

logInRouter.route("/signIn")
    .post(logInController.logIn)
    
logInRouter.route("/")
    .post(logInController.createLogIn)
    .get(logInController.newPassword)
module.exports = logInRouter;