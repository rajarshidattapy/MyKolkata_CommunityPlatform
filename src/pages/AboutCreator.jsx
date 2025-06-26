import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function AboutCreator() {
  return (
    <div className="min-h-screen p-4 pt-20">
      <div className="card max-w-xl mx-auto">
        <img
          src="/rd.webp"
          alt="Creator"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-center mb-2">Rajarshi Datta</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
        
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Hi! I'm a passionate developer from Kolkata who loves building things that make a difference.
            MyKolkata is my tribute to this beautiful city and its rich culture.
          </p>
          
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to connect with me on social media!
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/rajarshidattapy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/rajarshidatta05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutCreator