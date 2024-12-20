const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Pages/index.html"));
});
app.all("*", () => {
  res.status(404).send("Page not fou");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
