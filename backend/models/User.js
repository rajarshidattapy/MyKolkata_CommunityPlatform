const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  otp: { type: String },
  profile: {
    name: String,
    email: String,
    avatar: String
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 