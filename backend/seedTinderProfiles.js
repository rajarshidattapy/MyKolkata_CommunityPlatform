const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const TinderProfile = require('./models/TinderProfile');

const profilesData = [
  {
    name: 'Victoria Memorial',
    age: '100+',
    bio: 'Majestic marble building dedicated to Queen Victoria. Looking for history enthusiasts!',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800'
  },
  {
    name: 'Netaji Subhash Chandra Bose',
    age: '150+',
    bio: 'Netaji Subhas Chandra Bose was a prominent Indian freedom fighter and leader who played a key role in India\'s struggle for independence, known for his leadership of the Indian National Army (INA) and his call for "Give me blood, and I shall give you freedom.',
    image: 'nscb.webp'
  },
  {
    name: 'Jorasanko Thakur Bari, North Kolkata',
    age: '80+',
    bio: 'Jorasanko Thakur Bari, the ancestral home of Rabindranath Tagore, offers visitors a glimpse into the rich cultural and literary history of Bengal, showcasing the life and legacy of the Nobel laureate.',
    image: 'jstb.jpg'
  },
  {
    name: 'Maidan',
    age:'250+',
    bio:'The British cleared a vast area of jungle and settlements around the fort to create an open space, primarily for military defense, which later became the Maidan.Today, it is the largest urban park in Kolkata and is often called the "Lungs of Kolkata." It covers over 1,000 acres, stretching from Raj Bhavan to the Hooghly River, and is home to landmarks like the Victoria Memorial, Eden Gardens, and Shaheed Minar.',
    image: 'maidan.jpg'
  },
  {
    name: 'Indian Museum',
    age:'210+',
    bio:'It was founded in 1814, making it the oldest museum in India and one of the oldest in the world.',
    image: 'indmus.jpg'
  },
  {
    name: 'Dakshineswar Kali Temple',
    age:'170+',
    bio:'The Dakshineswar Kali Temple is one of the most famous temples in West Bengal, dedicated to Goddess Kali. It is located on the eastern bank of the Hooghly River in Dakshineswar, Kolkata.',
    image: 'dkt.jpg'
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await TinderProfile.deleteMany({});
    await TinderProfile.insertMany(profilesData);
    console.log('Tinder profiles seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 