const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const Transport = require('./models/Transport');

const transportData = [
  // Auto Stands
  { category: 'auto', name: 'Gariahat Crossing', distance: '0.3 km', time: '2 mins' },
  { category: 'auto', name: 'Rashbehari Crossing', distance: '0.8 km', time: '5 mins' },
  { category: 'auto', name: 'Golpark', distance: '1.2 km', time: '7 mins' },
  // Bus Stands
  { category: 'bus', name: 'Gariahat Bus Stop', distance: '0.5 km', time: '5 mins', routes: ['S24', 'VS5', '47B'] },
  { category: 'bus', name: 'Ballygunge Phari', distance: '1.2 km', time: '8 mins', routes: ['S24', 'VS5', '47B'] },
  { category: 'bus', name: 'Golpark Bus Stand', distance: '1.5 km', time: '10 mins', routes: ['S24', 'VS5', '47B'] },
  // Taxi Stands
  { category: 'taxi', name: 'Gariahat Taxi Stand', distance: '0.4 km', time: '3 mins' },
  { category: 'taxi', name: 'Ballygunge Station', distance: '1.0 km', time: '6 mins' },
  { category: 'taxi', name: 'Southern Avenue', distance: '1.3 km', time: '8 mins' },
  // Metro - Nearest
  { category: 'metro', name: 'Kalighat Metro', distance: '0.8 km', time: '10 mins walk' },
  { category: 'metro', name: 'Jatin Das Park', distance: '1.2 km', time: '15 mins walk' },
  { category: 'metro', name: 'Maidan', distance: '1.5 km', time: '18 mins walk' },
  // Metro - North Line
  { category: 'metro', from: 'Kavi Subhash', to: 'Dakshineswar', time: '10:00 AM' },
  { category: 'metro', from: 'Dakshineswar', to: 'Kavi Subhash', time: '10:15 AM' },
  { category: 'metro', from: 'Kavi Subhash', to: 'Dakshineswar', time: '10:30 AM' },
  // Metro - Dakshineswar Line
  { category: 'metro', from: 'Dakshineswar', to: 'Kavi Subhash', time: '10:05 AM' },
  { category: 'metro', from: 'Kavi Subhash', to: 'Dakshineswar', time: '10:20 AM' },
  { category: 'metro', from: 'Dakshineswar', to: 'Kavi Subhash', time: '10:35 AM' },
  // Train - Howrah
  { category: 'train', name: 'Bandel Local', platform: '1', time: '10:30 AM' },
  { category: 'train', name: 'Burdwan Express', platform: '3', time: '11:00 AM' },
  { category: 'train', name: 'Katwa Local', platform: '2', time: '11:30 AM' },
  // Train - Sealdah
  { category: 'train', name: 'Barrackpore Local', platform: '1', time: '10:45 AM' },
  { category: 'train', name: 'Naihati Local', platform: '2', time: '11:15 AM' },
  { category: 'train', name: 'Krishnanagar Express', platform: '4', time: '11:45 AM' },
  // Train - Santragachi
  { category: 'train', name: 'Kharagpur Local', platform: '1', time: '10:15 AM' },
  { category: 'train', name: 'Midnapore Express', platform: '2', time: '10:45 AM' },
  { category: 'train', name: 'Haldia Local', platform: '3', time: '11:15 AM' },
  // Train - Shalimar
  { category: 'train', name: 'Puri Express', platform: '1', time: '10:00 AM' },
  { category: 'train', name: 'Digha Local', platform: '2', time: '10:30 AM' },
  { category: 'train', name: 'Kharagpur Fast', platform: '1', time: '11:00 AM' }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await Transport.deleteMany({});
    await Transport.insertMany(transportData);
    console.log('Transport data seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 