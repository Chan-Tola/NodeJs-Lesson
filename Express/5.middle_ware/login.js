module.exports = (req, res, next) => {
  console.log("login middleware");
  next();
};
