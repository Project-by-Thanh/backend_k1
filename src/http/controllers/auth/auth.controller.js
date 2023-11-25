const bcrypt = require("bcrypt");
const model = require("../../../models/index");
const User = model.User;
module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    const success = req.flash("success");
    res.render("auth/login", { msg, msgType, success });
  },
  handleLogin: async (req, res) => {
    res.redirect("/");
  },
  register: (req, res) => {
    res.render("auth/register");
  },
  handleRegister: async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const data = await User.create({
        name,
        email,
        password: hash,
        phone,
        address,
      });
      if (data) {
        req.flash("msg", "Đăng ký tài khoản thành công !");
        res.redirect("/auth/login");
        return;
      }
      req.flash("msg", "Đăng ký tài khoản thất bại !");
      res.redirect("/auth/register");
    });
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
