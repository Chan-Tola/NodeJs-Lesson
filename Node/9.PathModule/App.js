const path = require("path");
// absolute path
const HomeDirectlyPath = path.resolve(__dirname, "Docs", "txtMe.txt");
console.log(HomeDirectlyPath);
// relative path
const relativePath = path.join("Docs", "txtMe.txt");
console.log(relativePath);
