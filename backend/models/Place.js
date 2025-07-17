const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  location: String,
  // New fields for richer place data
  type: String, // e.g., Cafe, Monument, Museum
  rating: Number, // e.g., 4.5
  status: String // e.g., 'Open now', 'Closes at 5 PM'
}, { timestamps: true });

module.exports = mongoose.model('Place', placeSchema); 