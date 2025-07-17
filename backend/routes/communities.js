const express = require('express');
const router = express.Router();
const Community = require('../models/Community');
const auth = require('../middleware/auth');

// GET /api/communities
router.get('/', async (req, res) => {
  const communities = await Community.find();
  res.json(communities);
});

// POST /api/communities (protected)
router.post('/', auth, async (req, res) => {
  const { name, description, link, icon } = req.body;
  const community = new Community({ name, description, link, icon });
  await community.save();
  res.status(201).json(community);
});

module.exports = router; 