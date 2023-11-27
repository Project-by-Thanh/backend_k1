const model = require("../../models/index");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = model.User;
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    console.log(1222);
    console.log(email, password);
    if (!user) {
      done(null, false, { message: "Email không chính xác !" });
      return;
    }
    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (result) {
        done(null, user);
        return;
      }
      done(null, false, { message: "Mật khẩu không chính xác !" });
    });
  }
);
