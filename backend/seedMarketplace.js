const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const MarketplaceItem = require('./models/MarketplaceItem');

const marketplaceData = [
  {
    title: "Handloom Sarees - Bengal's pride.",
    location: "Gariahat Market",
    price: "₹1,500 onwards",
    image: "/sare.jpg",
    link: "https://www.orangewayfarer.com/best-saree-shops-in-kolkata/"
  },
  {
    title: "Bengali Sweets - The best of the best.",
    location: "New Market",
    price: "₹20 onwards",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    link: "https://balarammullick.com/"
  },
  {
    title: "Bongmade - Bengali Merch with a modern twist.",
    location: "Online",
    price: "₹199 onwards",
    image: "/shirt.webp",
    link: "https://bongmade.com/"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await MarketplaceItem.deleteMany({});
    await MarketplaceItem.insertMany(marketplaceData);
    console.log('Marketplace items seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 