var express = require("express");
var router = express.Router();
const TeacherController = require("../../http/controllers/teacher/teacher.controller");
/* GET home page. */
router.get("/", TeacherController.index);

module.exports = router;
