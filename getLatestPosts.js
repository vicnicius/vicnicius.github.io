const Parser = require("rss-parser");
const fs = require("fs");
const parser = new Parser();
const pug = require("pug");
const compiledFunction = pug.compileFile("index.pug");
(async () => {
  const feed = await parser.parseURL("http://medium.com/feed/@viniwrites");
  fs.writeFileSync("index.html", compiledFunction({ posts: feed.items }));
})();
