const Parser = require("rss-parser");
const fs = require("fs");
const parser = new Parser();
const pug = require("pug");
const compiledFunction = pug.compileFile("index.pug");
(async () => {
  fs.writeFileSync("index.html", compiledFunction());
})();
