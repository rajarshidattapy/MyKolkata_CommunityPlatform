import React from 'react'
import { FaMapMarkerAlt, FaCompass } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const regions = [
  {
    id: 'north',
    name: 'North Kolkata',
    description: 'Traditional pujas with heritage touch',
    image: 'https://assets.telegraphindia.com/telegraph/2021/Nov/1636726963_img_8377-jpg.jpg'
  },
  {
    id: 'central',
    name: 'Central Kolkata',
    description: 'Modern themes with grand displays',
    image: 'https://www.shutterstock.com/shutterstock/videos/3485372951/thumb/1.jpg?ip=x480'
  },
  {
    id: 'south',
    name: 'South Kolkata',
    description: 'Contemporary art meets tradition',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Kolkata_South_Central_CBD_%2811%29.jpg'
  }
]

function Pujo() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Durga Pujo</h1>
      
      {/* Region Cards */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 mb-6">
        {regions.map(region => (
          <div key={region.id} className="card flex-shrink-0 w-64 overflow-hidden">
            <img
              src={region.image}
              alt={region.name}
              className="w-full h-32 object-cover -mx-4 -mt-4 mb-3"
            />
            <h2 className="font-bold mb-1">{region.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{region.description}</p>
            <button className="text-orange-600 text-sm font-semibold">
              Explore {region.name} →
            </button>
          </div>
        ))}
      </div>

      {/* Pujos Near Me */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <FaCompass className="text-orange-600" size={24} />
          </div>
          <div>
            <h2 className="font-bold">Pujos Near Me</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Find pandals around you</p>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-600 rounded-lg h-64 flex items-center justify-center mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231272197!2d88.26495595!3d22.5354273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1659822244751!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-600" size={14} />
              <span className="font-semibold">Bagbazar Sarbojanin</span>
            </div>
            <span className="text-sm text-orange-600">1.2 km</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-600" size={14} />
              <span className="font-semibold">College Square</span>
            </div>
            <span className="text-sm text-orange-600">2.5 km</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pujo