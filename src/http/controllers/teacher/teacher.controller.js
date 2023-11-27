// const model = require("../../../models/index");
class TeacherController {
  async index(req, res) {
    res.render("teachers/home/index");
  }
}
module.exports = new TeacherController();
