const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  swipeDirection: String, // 'right' or 'left'
  feedbackText: String,
  stars: Number
}, { _id: false });

const tinderProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: String,
  bio: String,
  image: String,
  baseStars: { type: Number, default: 3.0 }, // External base rating
  feedbacks: [feedbackSchema],
  averageStars: Number
}, { timestamps: true });

module.exports = mongoose.model('TinderProfile', tinderProfileSchema); 