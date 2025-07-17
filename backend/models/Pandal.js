const mongoose = require('mongoose');

const pandalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  description: String,
  image: String,
  distance: String,
  rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Pandal', pandalSchema); 