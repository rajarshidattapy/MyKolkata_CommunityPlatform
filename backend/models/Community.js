const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  link: String,
  icon: String // e.g., 'FaInstagram', 'FaMeetup'
}, { timestamps: true });

module.exports = mongoose.model('Community', communitySchema); 