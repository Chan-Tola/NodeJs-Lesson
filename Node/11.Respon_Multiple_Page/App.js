const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  let path = "./Pages/";
  //   if (req.url == "/") {
  //     path += "index.html";
  //   } else if (req.url == "/about") {
  //     path += "about.html";
  //   } else if (req.url == "/services") {
  //     path += "services.html";
  //   }
  //   else {
  //     path +="err.html";
  //   }
  //   we also can use it with the switch case
  //   status that we use have 200 for good response and 404 for bad response
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/services":
      path += "services.html";
      res.statusCode = 200;
      break;
    default:
      path += "err.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, () => {
  console.log("listening on port 3000");
});
