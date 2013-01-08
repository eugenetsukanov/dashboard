var server = require("./settings/server"),
	router = require("./settings/router"),
	requestHandlers = require("./app/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/index"] = requestHandlers.index;
handle["/wiki"] = requestHandlers.wiki;

server.start(router.route, handle);