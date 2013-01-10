var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

function defineModels (fn) {

	var lessonSchema = new Schema({
	    name: String
	});
	
	console.log('load models');

	mongoose.model('Lesson', lessonSchema);
	
	fn();

}

exports.defineModels = defineModels;