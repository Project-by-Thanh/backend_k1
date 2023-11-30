const { login_tokens } = require("../../models/index");
module.exports = async (req, res, next) => {
  if (!req.user) {
    return res.redirect("/auth/login");
  }
  const loginToken = await login_tokens.findOne({
    where: {
      userId: req.user.id,
    },
  });
  if (!loginToken) {
    next();
  } else {
    if (loginToken.token === req.cookies.loginToken) {
      if (req.user.typeId === 1) {
        return res.redirect("/");
      } else if (req.user.typeId === 2) {
        return res.redirect("/teacher");
      }
      return res.redirect("/student");
    } else {
      res.clearCookie("loginToken");
      next();
    }
  }
  next();
};
