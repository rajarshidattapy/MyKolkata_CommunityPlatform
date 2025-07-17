const express = require('express');
const router = express.Router();
const TinderProfile = require('../models/TinderProfile');
const auth = require('../middleware/auth');

// GET /api/tinder-profiles
router.get('/', async (req, res) => {
  const profiles = await TinderProfile.find();
  res.json(profiles);
});

// POST /api/tinder-profiles (protected)
router.post('/', auth, async (req, res) => {
  const { name, age, bio, image } = req.body;
  const profile = new TinderProfile({ name, age, bio, image });
  await profile.save();
  res.status(201).json(profile);
});

// POST /api/tinder-profiles/:id/feedback
router.post('/:id/feedback', async (req, res) => {
  const { swipeDirection, feedbackText, userStars } = req.body;
  const profileId = req.params.id;
  try {
    // Call Python NLP service
    const response = await fetch('http://localhost:8000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: feedbackText, swipeDirection, userStars })
    });
    const { stars } = await response.json();
    // Update profile
    const profile = await TinderProfile.findById(profileId);
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    profile.feedbacks.push({ swipeDirection, feedbackText, stars });
    // Weighted average: baseStars (external) + user feedbacks
    const N = 5; // weight for baseStars
    const userStarsArr = profile.feedbacks.map(f => f.stars || 0);
    const sumUserStars = userStarsArr.reduce((sum, s) => sum + s, 0);
    profile.averageStars = (profile.baseStars * N + sumUserStars) / (N + userStarsArr.length);
    await profile.save();
    res.json({ stars, averageStars: profile.averageStars });
  } catch (err) {
    res.status(500).json({ message: 'Error processing feedback', error: err.message });
  }
});

module.exports = router; 