const express = require('express');
const router = express.Router();
const Pandal = require('../models/Pandal');
const auth = require('../middleware/auth');

// GET /api/pandals
router.get('/', async (req, res) => {
  const pandals = await Pandal.find();
  res.json(pandals);
});

// POST /api/pandals (protected)
router.post('/', auth, async (req, res) => {
  const { name, location, description, image, distance, rating } = req.body;
  const pandal = new Pandal({ name, location, description, image, distance, rating });
  await pandal.save();
  res.status(201).json(pandal);
});

module.exports = router; 