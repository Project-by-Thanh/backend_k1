// const model = require("../../../models/index");
class DashboardController {
  async index(req, res) {
    res.render("admin/dashboard/index");
  }
}
module.exports = new DashboardController();
