const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const Pandal = require('./models/Pandal');

const pandalsData = [
  {
    name: 'Bagbazar Sarbojanin',
    location: 'Bagbazar, Kolkata',
    description: 'One of the oldest and most popular Durga Puja celebrations in Kolkata, known for its traditional approach and cultural significance.',
    image: 'https://images.unsplash.com/photo-1601181487375-f2194c87a04b?w=800',
    distance: '2.5 km',
    rating: 4.8
  },
  {
    name: 'Mohammad Ali Park',
    location: 'Central Kolkata',
    description: 'Famous for its unique themes and elaborate decorations, this pandal attracts thousands of visitors every year.',
    image: 'https://images.unsplash.com/photo-1601931935934-17c3717239ab?w=800',
    distance: '3.1 km',
    rating: 4.6
  },
  {
    name: 'College Square',
    location: 'College Street',
    description: 'Known for its stunning water body reflections and lighting arrangements, making it a photographer\'s paradise.',
    image: 'https://images.unsplash.com/photo-1592305029529-4a6a3d0cde1c?w=800',
    distance: '1.8 km',
    rating: 4.7
  },
  {
    name: 'Victoria Memorial',
    location: 'Central Kolkata',
    description: 'Historic marble building and museum showcasing British-era architecture.',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800',
    distance: '4.2 km',
    rating: 4.9
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await Pandal.deleteMany({});
    await Pandal.insertMany(pandalsData);
    console.log('Pandals seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 