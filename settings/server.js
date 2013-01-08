var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;

    route(pathname, handle, response);
    
    console.log("Request received.");
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write("Hello World");
    // response.end();

    // fs.readFile('./layout/index.html',function (err, data){
    //     response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    //     response.write(data);
    //     response.end();
    // });
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has started.");
}

exports.start = start;