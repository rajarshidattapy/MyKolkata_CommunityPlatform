const express = require('express');
const router = express.Router();
const News = require('../models/News');
const auth = require('../middleware/auth');

// GET /api/news
router.get('/', async (req, res) => {
  const news = await News.find();
  res.json(news);
});

// POST /api/news (protected)
router.post('/', auth, async (req, res) => {
  const { title, description, image, link } = req.body;
  const news = new News({ title, description, image, link });
  await news.save();
  res.status(201).json(news);
});

module.exports = router; 