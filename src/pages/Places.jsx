import React, { useState } from 'react'
import { FaStar, FaMapMarkerAlt, FaCompass, FaCoffee, FaLandmark, FaMountain } from 'react-icons/fa'

const nearbyPlaces = [
  {
    id: '1',
    name: 'Flurys',
    type: 'Cafe',
    distance: '0.8 km',
    status: 'Open now'
  },
  {
    id: '2',
    name: 'Victoria Memorial',
    type: 'Monument',
    distance: '1.2 km',
    status: 'Open now'
  },
  {
    id: '3',
    name: 'Indian Museum',
    type: 'Museum',
    distance: '2.5 km',
    status: 'Closes at 5 PM'
  }
]

const cafes = [
  {
    id: '1',
    name: 'Flurys',
    location: 'Park Street',
    description: 'Iconic cafe known for its European-style cakes and pastries.',
    imageUrl: '/flury.avif',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Paris Cafe',
    location: 'Park Street',
    description: 'Cozy cafe serving French pastries and coffee.',
    imageUrl: '/street.jpg',
    rating: 4.3
  },
  {
    id: '3',
    name: 'Mocambo',
    location: 'Park Street',
    description: 'Vintage restaurant with Continental cuisine.',
    imageUrl: '/moc.jpg',
    rating: 4.6
  }
]

const kolkataAttractions = [
  {
    id: '1',
    name: 'Victoria Memorial',
    location: 'Central Kolkata',
    description: 'Majestic marble building and museum.',
    imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Howrah Bridge',
    location: 'Howrah',
    description: 'Iconic cantilever bridge over Hooghly River.',
    imageUrl: '/hwh.jpg',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Indian Museum',
    location: 'Park Street',
    description: 'Oldest and largest museum in India.',
    imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
    rating: 4.5
  }
]

const westBengalDestinations = [
  {
    id: '1',
    name: 'Darjeeling',
    description: 'Queen of Hills with tea gardens and mountain views.',
    imageUrl: '/dar.webp',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Sundarbans',
    description: 'World\'s largest mangrove forest.',
    imageUrl: '/sundarban.jpg',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Digha',
    description: 'Popular beach destination.',
    imageUrl: '/dig.jpg',
    rating: 4.4
  }
]

function Places() {
  const [activeTab, setActiveTab] = useState('nearby')

  return (
    <div className="min-h-screen pb-20">
      {/* Places Near Me */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <FaCompass className="text-orange-600" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-xl">Near Me</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Discover places around you</p>
          </div>
        </div>

        <div className="space-y-3">
          {nearbyPlaces.map(place => (
            <div key={place.id} className="card flex justify-between items-center">
              <div>
                <h3 className="font-bold">{place.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{place.type}</p>
                <span className="text-xs text-green-600">{place.status}</span>
              </div>
              <div className="text-right">
                <span className="text-orange-600 font-bold">{place.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-gray-100 dark:bg-gray-800 p-4 shadow-sm z-10">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('cafes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === 'cafes'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            <FaCoffee size={16} />
            Cafes & Places
          </button>
          <button
            onClick={() => setActiveTab('kolkata')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === 'kolkata'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            <FaLandmark size={16} />
            In Kolkata
          </button>
          <button
            onClick={() => setActiveTab('bengal')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === 'bengal'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            <FaMountain size={16} />
            West Bengal
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-4">
        {activeTab === 'cafes' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Popular Cafes</h2>
            {cafes.map(cafe => (
              <div key={cafe.id} className="card overflow-hidden">
                <img
                  src={cafe.imageUrl}
                  alt={cafe.name}
                  className="w-full h-48 object-cover -mx-4 -mt-4 mb-4"
                />
                <h3 className="text-lg font-bold mb-1">{cafe.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300" size={14} />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{cafe.location}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cafe.description}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-orange-600" size={14} />
                  <span className="text-orange-600 font-bold">{cafe.rating}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'kolkata' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Places to Visit in Kolkata</h2>
            {kolkataAttractions.map(place => (
              <div key={place.id} className="card overflow-hidden">
                <img
                  src={place.imageUrl}
                  alt={place.name}
                  className="w-full h-48 object-cover -mx-4 -mt-4 mb-4"
                />
                <h3 className="text-lg font-bold mb-1">{place.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300" size={14} />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{place.location}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{place.description}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-orange-600" size={14} />
                  <span className="text-orange-600 font-bold">{place.rating}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'bengal' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Explore West Bengal</h2>
            {westBengalDestinations.map(destination => (
              <div key={destination.id} className="card overflow-hidden">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-full h-48 object-cover -mx-4 -mt-4 mb-4"
                />
                <h3 className="text-lg font-bold mb-1">{destination.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{destination.description}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-orange-600" size={14} />
                  <span className="text-orange-600 font-bold">{destination.rating}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Places