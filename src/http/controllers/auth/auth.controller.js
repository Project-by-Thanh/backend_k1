const bcrypt = require("bcrypt");
const model = require("../../../models/index");
const User = model.User;
module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    const success = req.flash("success");
    res.render("auth/login", {
      msg,
      msgType,
      success,
      layout: "layouts/auth.layout.ejs",
    });
  },
  handleLogin: async (req, res) => {
    if (req.user.typeId === 1) {
      return res.redirect("/");
    } else if (req.user.typeId === 2) {
      return res.redirect("/teacher");
    }
    res.redirect("/student");
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
