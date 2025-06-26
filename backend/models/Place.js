const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  location: String
}, { timestamps: true });

module.exports = mongoose.model('Place', placeSchema); 