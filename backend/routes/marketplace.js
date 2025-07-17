const express = require('express');
const router = express.Router();
const MarketplaceItem = require('../models/MarketplaceItem');
const auth = require('../middleware/auth');

// GET /api/marketplace
router.get('/', async (req, res) => {
  const items = await MarketplaceItem.find();
  res.json(items);
});

// POST /api/marketplace (protected)
router.post('/', auth, async (req, res) => {
  const { title, location, price, image, link } = req.body;
  const item = new MarketplaceItem({ title, location, price, image, link });
  await item.save();
  res.status(201).json(item);
});

module.exports = router; 