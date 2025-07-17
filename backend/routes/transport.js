const express = require('express');
const router = express.Router();
const Transport = require('../models/Transport');
const auth = require('../middleware/auth');

// GET /api/transport
router.get('/', async (req, res) => {
  const transport = await Transport.find();
  res.json(transport);
});

// POST /api/transport (protected)
router.post('/', auth, async (req, res) => {
  const { category, name, location, distance, time, platform, routes, from, to } = req.body;
  const entry = new Transport({ category, name, location, distance, time, platform, routes, from, to });
  await entry.save();
  res.status(201).json(entry);
});

module.exports = router; 