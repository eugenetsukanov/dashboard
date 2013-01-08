var fs = require('fs');

function index(response) {
  console.log("Request handler 'index' was called.");
	fs.readFile('./layout/index.html',function (err, data){
	    response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
	    response.write(data);
	    response.end();
	});
}

function wiki(response) {
  console.log("Request handler 'wiki' was called.");
  fs.readFile('./layout/wiki.html',function (err, data){
	    response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
	    response.write(data);
	    response.end();
	});
}

exports.index = index;
exports.wiki = wiki;