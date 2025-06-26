import React from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaHeart, FaPrayingHands, FaNewspaper, FaStore } from 'react-icons/fa'

function Home() {
  const news = [
    {
      id: 3,
      title: "Anandabazar Patrika today",
      description: "এগিয়ে থাকে,এগিয়ে রাখে।",
      image: "/ana.jpg",
      link: "https://epaper.anandabazar.com/"
    },
    {
      id: 1,
      title: "International Book Fair '25",
      description: "The biggest literary event of the year! This year was great!",
      image: "/bkf.avif",
      link: "https://kolkatabookfair.net/download-ikbf-app"
    },
    {
      id: 2,
      title: "Kolkata Derby: EB vs MB",
      description: "The age-old rivalry continues! Don't miss the epic clash this weekend.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
      link: "https://www.google.com/search?q=east+bengal+vs+mohun+bagan+match+today+kolkata&rlz=1C1VDKB_enIN1132IN1132&oq=east+bengal+vs+mohun+bagan+match+today+kolkata&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBCDc3OTRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
  ];

  const marketplace = [
    {
      id: 1,
      title: "Handloom Sarees - Bengal's pride.",
      location: "Gariahat Market",
      price: "₹1,500 onwards",
      image: "/sare.jpg",
      link: "https://www.orangewayfarer.com/best-saree-shops-in-kolkata/"
    },
    {
      id: 2,
      title: "Bengali Sweets - The best of the best.",
      location: "New Market",
      price: "₹20 onwards",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
      link: "https://balarammullick.com/"
    },
    {
      id: 3,
      title: "Bongmade - Bengali Merch with a modern twist.",
      location: "Online",
      price: "₹199 onwards",
      image: "/shirt.webp",
      link: "https://bongmade.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center mb-10">
        {/* Replace '/hero-bg.jpg' with your desired hero image in /public */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow mb-3">Welcome to Kolkata!</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6">The City of Joy awaits you</p>
          <Link
            to="/places"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Explore Now
          </Link>
        </div>
      </div>

      {/* Recent News Section */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaNewspaper className="text-orange-500" /> Recent News
        </h2>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-2">
          {news.map(item => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden flex-shrink-0 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
              style={{ width: '300px' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <hr className="border-t border-gray-300 dark:border-gray-700" />
      </div>

      {/* Marketplace Section */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaStore className="text-orange-500" /> Marketplace
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {marketplace.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col transform hover:scale-105 focus-within:ring-2 focus-within:ring-orange-400"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.location}</p>
                <p className="text-orange-600 font-bold mb-3">{item.price}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full font-semibold text-sm hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
