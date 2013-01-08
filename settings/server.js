var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World !");
    response.end();
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has started.");
}

exports.start = start;