const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const News = require('./models/News');

const newsData = [
  {
    title: "Anandabazar Patrika today",
    description: "এগিয়ে থাকে,এগিয়ে রাখে।",
    image: "/ana.jpg",
    link: "https://epaper.anandabazar.com/"
  },
  {
    title: "International Book Fair '25",
    description: "The biggest literary event of the year! This year was great!",
    image: "/bkf.avif",
    link: "https://kolkatabookfair.net/download-ikbf-app"
  },
  {
    title: "Kolkata Derby: EB vs MB",
    description: "The age-old rivalry continues! Don't miss the epic clash this weekend.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    link: "https://www.google.com/search?q=east+bengal+vs+mohun+bagan+match+today+kolkata&rlz=1C1VDKB_enIN1132IN1132&oq=east+bengal+vs+mohun+bagan+match+today+kolkata&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBCDc3OTRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    await News.deleteMany({});
    await News.insertMany(newsData);
    console.log('News seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 