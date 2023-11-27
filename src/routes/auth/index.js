var express = require("express");
var router = express.Router();
var passport = require("passport");
const AuthController = require("../../http/controllers/auth/auth.controller");
const LoginMiddleware = require("../../http/middlewares/login/loginLocalMiddleware");
/* GET home page. */
router.get("/login", LoginMiddleware, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    // successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/logout", AuthController.logout);
module.exports = router;
