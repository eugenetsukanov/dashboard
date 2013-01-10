/*
	Lessons page
*/

var  mongoose = require('mongoose')
	, express = require('express');


exports.index = function(req, res){
  var silence = new Lesson({ name: 'Silence' });
  res.render('index', { 
  	title: 'Lessons page', 
  	content: silence.name 
  });
};

exports.result = function(req, res){
  res.render('index', { 
  	title: 'Result page Ahaaaa'
  });
};