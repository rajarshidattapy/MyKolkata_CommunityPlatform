require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('MyKolkata backend is running');
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const placesRoutes = require('./routes/places');
app.use('/api/places', placesRoutes);

const profileRoutes = require('./routes/profile');
app.use('/api/profile', profileRoutes);

const contributeRoutes = require('./routes/contribute');
app.use('/api/contribute', contributeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 