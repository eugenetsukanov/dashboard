/*
	Lessons page
*/

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Lessons page', 
  	content: 'Lorem ipsum' 
  });
};

exports.result = function(req, res){
  res.render('index', { 
  	title: 'Result page Ahaaaa'
  });
};