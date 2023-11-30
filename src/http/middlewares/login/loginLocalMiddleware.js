module.exports = async (req, res, next) => {
  if (req.user) {
    console.log(484884);
    return res.redirect("/");
  }
  console.log(5656565);
  next();
};
