const mongoose = require('mongoose');

const questionNlbVitaSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	messenger_id: Number,
	first_name: String,
	last_name: String, 
	question: String,
	date: Date,
});

module.exports = mongoose.model('QuestionNlbVita', questionNlbVitaSchema);
