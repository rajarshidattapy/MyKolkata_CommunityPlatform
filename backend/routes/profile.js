const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// GET /api/profile
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ phone: user.phone, profile: user.profile });
});

module.exports = router; 