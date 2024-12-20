// readFile and writeFile for asynchronous
const { readFile, writeFile, mkdir, rmdir, existsSync, unlink } = require("fs");

// this is function write text into file
writeFile("./docs/readMe.txt", "This renchantola I love you nisa", () => {
  console.log("file added");
});
writeFile("./docs/meeting.txt", "We have meeting tiem tmr", () => {
  console.log("meeting have comfirmed");
});

// this is function read text from file
readFile("./docs/readMe.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});

// create folder
// so it have the overwirte name folder and the node tell the error
// this is the solution
if (!existsSync("./data")) {
  mkdir("./data", (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("folder added");
  });
}
if (!existsSync("./store")) {
  mkdir("./store", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("folder store added");
  });
}
// remove folder
if (existsSync("./store")) {
  rmdir("./store", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("folder removed");
  });
}

// remove file
if (existsSync("./docs/meeting.txt")) {
  unlink("./docs/meeting.txt", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file removed");
  });
}
