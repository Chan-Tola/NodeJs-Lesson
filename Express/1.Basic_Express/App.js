const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
// catch error page
/* app.all meaning that all of it is get,post,put,delete but 
do not put it on the top it is the syntax  */
app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
