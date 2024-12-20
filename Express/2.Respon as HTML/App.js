const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

//path.join(__dirname, "./pages", "index.html");
// we also can use it with the resvole
// path.resolve(__dirname, "./pages/index.html");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
