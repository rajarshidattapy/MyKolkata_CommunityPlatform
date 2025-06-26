const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Mock OTP sender
function sendOTP(phone, otp) {
  console.log(`Sending OTP ${otp} to phone ${phone}`);
}

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: 'Phone required' });
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  let user = await User.findOne({ phone });
  if (!user) user = await User.create({ phone });
  user.otp = otp;
  await user.save();
  sendOTP(phone, otp);
  res.json({ message: 'OTP sent' });
});

// POST /api/auth/verify
router.post('/verify', async (req, res) => {
  const { phone, otp } = req.body;
  const user = await User.findOne({ phone });
  if (!user || user.otp !== otp) return res.status(401).json({ message: 'Invalid OTP' });
  user.otp = null;
  await user.save();
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
});

module.exports = router; 