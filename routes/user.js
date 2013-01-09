
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("It's a layout with users list");
};

exports.id = function(req, res){
  res.send('user name or id: @' + req.params.id);
};