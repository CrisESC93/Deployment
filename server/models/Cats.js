const mongoose = require('mongoose');
const { Schema } = mongoose;

const catsSchema = new Schema({
	name: String,
	race: String,
	color: String
});

mongoose.model('cats', catsSchema);