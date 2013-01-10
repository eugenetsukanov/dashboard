
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , models = require('./models/model')
  , routers = require('./routes/routes')
  , mongoose = require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('mongo.host', process.env.MONGO_HOST || '127.0.0.1');
  app.set('mongo.db', process.env.MONGO_DB || 'db'); 
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

// db
mongoose.connect('mongodb://' + app.get('mongo.host') + '/' + app.get('mongo.db'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('db connect')
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// routers
routers.route(app);

// models
models.defineModels(function(){
  app.Lesson = Lesson = mongoose.model('Lesson');
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});