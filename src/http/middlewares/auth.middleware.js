const { login_tokens } = require("../../models/index");
module.exports = async (req, res, next) => {
  if (!req.user) {
    return res.redirect("/auth/login");
  } else {
    console.log("userId: " + req.user.id);
    const loginToken = await login_tokens.findOne({
      where: {
        userId: req.user.id,
      },
    });
    console.log(1223);
    console.log(req.cookies.loginToken);
    console.log("Token: ", loginToken.token);
    if (req.cookies.loginToken === loginToken.token) {
      next();
    } else {
      req.logout((err) => {
        if (err) {
          next();
        }
      });
      res.clearCookie("loginToken");
      res.redirect("/auth/login");
      //   return;
    }
  }
};
