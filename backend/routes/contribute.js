const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Contribution = mongoose.model('Contribution', contributionSchema);

// POST /api/contribute
router.post('/', auth, async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: 'Content required' });
  const contribution = new Contribution({ user: req.user.userId, content });
  await contribution.save();
  res.status(201).json(contribution);
});

module.exports = router; 