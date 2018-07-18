const mongoose = require('mongoose');

const arrivalScheduleSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	messenger_id: Number,
	bot_id: Number,
	chatfuel_token: Number,
	first_name: String,
	last_name: String, 
	arrival_location: String,
	date_of_arrival: Date,
	block_name: String,
	language: String
});

module.exports = mongoose.model('ArrivalSchedule', arrivalScheduleSchema);
