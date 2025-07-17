const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., 'auto', 'bus', 'taxi', 'metro', 'train'
  name: String,
  location: String,
  distance: String,
  time: String,
  platform: String,
  routes: [String],
  from: String,
  to: String
}, { timestamps: true });

module.exports = mongoose.model('Transport', transportSchema); 