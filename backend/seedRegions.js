const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const Region = require('./models/Region');

const regionsData = [
  {
    name: 'North Kolkata',
    description: 'Traditional pujas with heritage touch',
    image: 'https://assets.telegraphindia.com/telegraph/2021/Nov/1636726963_img_8377-jpg.jpg'
  },
  {
    name: 'Central Kolkata',
    description: 'Modern themes with grand displays',
    image: 'https://www.shutterstock.com/shutterstock/videos/3485372951/thumb/1.jpg?ip=x480'
  },
  {
    name: 'South Kolkata',
    description: 'Contemporary art meets tradition',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Kolkata_South_Central_CBD_%2811%29.jpg'
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await Region.deleteMany({});
    await Region.insertMany(regionsData);
    console.log('Regions seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 