var express = require("express");
var router = express.Router();
const DashboardController = require("../../http/controllers/admin/dashboard.controller");
/* GET home page. */
router.get("/", DashboardController.index);

module.exports = router;
