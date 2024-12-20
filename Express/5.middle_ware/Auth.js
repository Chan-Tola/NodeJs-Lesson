function AuthorHandle(req, res, next) {
  console.log(req.method);
  next();
}

module.exports = AuthorHandle;
