var home = require('../routes/index')
  , user = require('../routes/user')
  , lessons = require('../routes/lessons');

function route (app) {
	
	app.get('/', home.index);
	app.get('/users', user.list);
	app.get('/users/:id', user.id);
	app.get('/lessons', lessons.index);
	app.get('/lessons/result', lessons.result); 

}

exports.route = route;
