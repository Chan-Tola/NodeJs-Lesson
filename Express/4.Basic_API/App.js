const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const data = require("./api");
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/index.html"));
});
app.get("/api", (req, res) => {
  console.log(data);
  res.json(data);
});
app.get("/api/:id", (req, res) => {
  // use Param()
  const findData = data.find((e) => {
    return e.id == req.params.id;
  });
  findData ? res.json(findData) : res.status(404).send("Page not found");
  //   res.json(findData);
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
