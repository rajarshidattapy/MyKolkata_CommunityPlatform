const express = require('express');
const router = express.Router();
const Region = require('../models/Region');
const auth = require('../middleware/auth');

// GET /api/regions
router.get('/', async (req, res) => {
  const regions = await Region.find();
  res.json(regions);
});

// POST /api/regions (protected)
router.post('/', auth, async (req, res) => {
  const { name, description, image } = req.body;
  const region = new Region({ name, description, image });
  await region.save();
  res.status(201).json(region);
});

module.exports = router; 