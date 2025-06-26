const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const auth = require('../middleware/auth');

// GET /api/places
router.get('/', async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

// POST /api/places (protected)
router.post('/', auth, async (req, res) => {
  const { name, description, image, location } = req.body;
  const place = new Place({ name, description, image, location });
  await place.save();
  res.status(201).json(place);
});

module.exports = router; 