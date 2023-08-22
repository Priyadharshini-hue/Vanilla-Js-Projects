const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const types = {
  html: "text/html",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  png: "image/png",
  js: "text/javascript",
  css: "text/css",
};

http
  .createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(), unescape(uri));
    var stats;

    try {
      stats = fs.lstatSync(fileName);
    } catch (error) {
      res.writeHead(404, { "context-type": "text/plain" });
      res.write("404 Not Found");
      res.end();
    }

    if (stats.isFile()) {
      var type = types[path.extname(filname).split(".").reverse()[0]];
      res.writeHead(200, { "context-type": type });
      var stream = fs.createReadStream(fileName);
      stream.pipe(res);
    } else if (stats.isDirectory()) {
      res.writeHead(302, { Location: "index.html" });
      res.end()
    } else {
        res.writeHead(500, {'Content-type':'text/plain'});
		res.write('500 Internal Error\n');
		res.end();
    }
  })
  .listen(3000);
