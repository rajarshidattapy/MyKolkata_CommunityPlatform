const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  link: String
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema); 