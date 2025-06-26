import React, { useState } from 'react'
import { FaInstagram, FaMeetup, FaGithub, FaPlus } from 'react-icons/fa'

const communities = [
  {
    id: 1,
    name: 'GDG Kolkata',
    description: 'Google Developer Group Kolkata - Tech community',
    link: 'https://gdg.community.dev/gdg-kolkata/',
    icon: FaMeetup
  },
  {
    id: 2,
    name: 'TFUG Kolkata',
    description: 'TensorFlow User Group Kolkata',
    link: 'https://www.tensorflow.org/community/groups',
    icon: FaMeetup
  },
  {
    id: 3,
    name: 'Calcutta Instagrammers',
    description: 'Photography and city stories',
    link: 'https://www.instagram.com/calcutta.instagrammers/',
    icon: FaInstagram
  },
  {
    id: 4,
    name: 'Streets of Calcutta',
    description: 'Daily life and culture',
    link: 'https://www.instagram.com/streetsofcalcutta/',
    icon: FaInstagram
  }
]

function Contribute() {
  const [showForm, setShowForm] = useState(false)
  const [newPost, setNewPost] = useState({ title: '', content: '', link: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle post submission
    setShowForm(false)
    setNewPost({ title: '', content: '', link: '' })
  }

  return (
    <div className="min-h-screen p-4 pt-20 pb-24">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Contribute to MyKolkata</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Join our community and share your Kolkata stories
        </p>
      </div>

      {/* Communities Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Communities</h2>
        <div className="grid gap-4">
          {communities.map(community => (
            <a
              key={community.id}
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="bg-orange-100 p-3 rounded-lg">
                <community.icon className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold">{community.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {community.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Share Your Story Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Share Your Story</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="p-2 bg-orange-600 text-white rounded-lg flex items-center gap-2"
          >
            <FaPlus size={16} />
            <span>New Post</span>
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="card mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full p-2 border rounded-lg h-32 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Link (optional)</label>
                <input
                  type="url"
                  value={newPost.link}
                  onChange={(e) => setNewPost({ ...newPost, link: e.target.value })}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold p-3 rounded-lg active:bg-orange-700 transition-colors"
              >
                Post Story
              </button>
            </div>
          </form>
        )}

        {/* User Stories will be displayed here */}
        <div className="space-y-4">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Be the first to share your Kolkata story!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contribute