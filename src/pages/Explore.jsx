import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'

const pandals = [
  {
    id: '1',
    name: 'Bagbazar Sarbojanin',
    location: 'Bagbazar, Kolkata',
    description: 'One of the oldest and most popular Durga Puja celebrations in Kolkata, known for its traditional approach and cultural significance.',
    imageUrl: 'https://images.unsplash.com/photo-1601181487375-f2194c87a04b?w=800',
    distance: '2.5 km',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Mohammad Ali Park',
    location: 'Central Kolkata',
    description: 'Famous for its unique themes and elaborate decorations, this pandal attracts thousands of visitors every year.',
    imageUrl: 'https://images.unsplash.com/photo-1601931935934-17c3717239ab?w=800',
    distance: '3.1 km',
    rating: 4.6
  },
  {
    id: '3',
    name: 'College Square',
    location: 'College Street',
    description: 'Known for its stunning water body reflections and lighting arrangements, making it a photographer\'s paradise.',
    imageUrl: 'https://images.unsplash.com/photo-1592305029529-4a6a3d0cde1c?w=800',
    distance: '1.8 km',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Victoria Memorial',
    location: 'Central Kolkata',
    description: 'Historic marble building and museum showcasing British-era architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800',
    distance: '4.2 km',
    rating: 4.9
  }
]

function Explore() {
  const [searchParams] = useSearchParams()
  const route = searchParams.get('route')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPandals = pandals.filter(pandal => 
    pandal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pandal.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-16 pb-6">
      <div className="sticky top-16 bg-gray-100 dark:bg-gray-800 p-4 shadow-sm">
        <input
          type="text"
          placeholder="Search pandals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border text-base dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="p-4 space-y-4">
        {filteredPandals.map(pandal => (
          <div key={pandal.id} className="card overflow-hidden active:scale-[0.99] transition-transform">
            <img
              src={pandal.imageUrl}
              alt={pandal.name}
              className="w-full h-48 object-cover -mx-4 -mt-4 mb-4"
            />
            <h2 className="text-lg font-bold mb-2 dark:text-white">{pandal.name}</h2>
            <div className="flex items-center gap-1 mb-2">
              <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300" size={14} />
              <span className="text-gray-600 dark:text-gray-300 text-sm">{pandal.location}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm line-clamp-2">{pandal.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="text-orange-600 font-bold">{pandal.rating}</span>
                <FaStar className="text-orange-600" size={14} />
              </div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">{pandal.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore