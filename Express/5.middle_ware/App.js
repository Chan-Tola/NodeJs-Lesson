const express = require("express");
const app = express();
const port = 3000;
const user = require("./data");
const AuthorHandle = require("./Auth");
const loginHandler = require("./login");

app.get("/", [loginHandler, AuthorHandle], (req, res) => {
  res.send("Home Page");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
