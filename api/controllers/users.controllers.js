var mongoose = require('mongoose');
var User  = mongoose.model('User');

module.exports.usersGetAll = function(req, res){
	User
		.find()
		.exec(function(err, users){
			console.log(err);
			console.log(users);
			if (err) {
				console.log("Error finding users");
				res
				.status(500)
				.json(err);
			} else {
				console.log("Found users", users.length);
				res
				.json(users);
			}
		});
};
module.exports.usersGetOne = function(req, res) {
	var id = req.params.userId;

	console.log('GET userId', id);

	User
		.findById(id)
		.exec(function(err, doc) {
			var response = {
				status:200,
				message: doc
			};
			if (err) {
				console.log("Error finding user");
				response.status = 500;
				response.message = err;
			} else if (!doc) {
				console.log("UserId not found in database", id);
				response.status = 404;
				response.message = {
					"message": "User ID not found"	+ id};
		}
		res
			.status(response.status)
			.json(response.message);
		});
};


