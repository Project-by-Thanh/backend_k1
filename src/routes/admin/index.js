var express = require("express");
var router = express.Router();
const DashboardController = require("../../http/controllers/admin/dashboard.controller");
const LoginMiddleware = require("../../http/middlewares/login/loginLocalMiddleware");
const AuthMiddleware = require("../../http/middlewares/auth.middleware");
/* GET home page. */
router.get("/", AuthMiddleware, DashboardController.index);

module.exports = router;
