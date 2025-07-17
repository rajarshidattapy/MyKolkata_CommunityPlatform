const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const Community = require('./models/Community');

const communitiesData = [
  {
    name: 'GDG Kolkata',
    description: 'Google Developer Group Kolkata - Tech community',
    link: 'https://gdg.community.dev/gdg-kolkata/',
    icon: 'FaMeetup'
  },
  {
    name: 'TFUG Kolkata',
    description: 'TensorFlow User Group Kolkata',
    link: 'https://www.tensorflow.org/community/groups',
    icon: 'FaMeetup'
  },
  {
    name: 'Calcutta Instagrammers',
    description: 'Photography and city stories',
    link: 'https://www.instagram.com/calcutta.instagrammers/',
    icon: 'FaInstagram'
  },
  {
    name: 'Streets of Calcutta',
    description: 'Daily life and culture',
    link: 'https://www.instagram.com/streetsofcalcutta/',
    icon: 'FaInstagram'
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await Community.deleteMany({});
    await Community.insertMany(communitiesData);
    console.log('Communities seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 