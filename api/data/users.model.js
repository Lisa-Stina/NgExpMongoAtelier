var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	isAdmin:{
		type: Boolean,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	birthday:{
		type: Date,
		required: true
	},
	skills:{
		type: [String],
		required: true
	},

});
mongoose.model('User', userSchema);