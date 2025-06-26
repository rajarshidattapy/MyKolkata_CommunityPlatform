import React from 'react'
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa'

function Profile() {
  return (
    <div className="min-h-screen p-4 pt-20">
      <div className="card max-w-xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <FaUser className="text-orange-600" size={40} />
          </div>
          <h1 className="text-2xl font-bold">Your Profile, auth not setup properly, doing hehe</h1>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <FaPhone className="text-gray-600 dark:text-gray-300" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone Number</p>
              <p className="font-semibold">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <FaEnvelope className="text-gray-600 dark:text-gray-300" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
              <p className="font-semibold">user@example.com</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-orange-600 text-white font-bold p-3 rounded-lg active:bg-orange-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile