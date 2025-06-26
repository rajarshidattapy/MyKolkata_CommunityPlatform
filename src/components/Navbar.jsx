import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaHome, FaUtensils, FaHeart, FaPrayingHands, FaTrain, FaUsers } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()
  
  if (location.pathname === '/' || !isAuthenticated) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center h-16">
        <NavLink to="/home" className={({ isActive }) => `flex flex-col items-center w-full py-1 ${isActive ? 'text-orange-600' : 'text-gray-600 dark:text-gray-400'}`}>
          <FaHome size={20} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        
        <NavLink to="/places" className={({ isActive }) => `flex flex-col items-center w-full py-1 ${isActive ? 'text-orange-600' : 'text-gray-600 dark:text-gray-400'}`}>
          <FaUtensils size={20} />
          <span className="text-xs mt-1">Explore</span>
        </NavLink>
        
        <NavLink to="/tinder" className={({ isActive }) => `flex flex-col items-center w-full py-1 ${isActive ? 'text-orange-600' : 'text-gray-600 dark:text-gray-400'}`}>
          <FaHeart size={20} />
          <span className="text-xs mt-1">Experiences</span>
        </NavLink>
        
        <NavLink to="/pujo" className={({ isActive }) => `flex flex-col items-center w-full py-1 ${isActive ? 'text-orange-600' : 'text-gray-600 dark:text-gray-400'}`}>
          <FaPrayingHands size={20} />
          <span className="text-xs mt-1">Pujo</span>
        </NavLink>

        <NavLink to="/transport" className={({ isActive }) => `flex flex-col items-center w-full py-1 ${isActive ? 'text-orange-600' : 'text-gray-600 dark:text-gray-400'}`}>
          <FaTrain size={20} />
          <span className="text-xs mt-1">Transport</span>
        </NavLink>

        <NavLink to="/contribute" className={({ isActive }) => `flex flex-col items-center w-full py-1 ${isActive ? 'text-orange-600' : 'text-gray-600 dark:text-gray-400'}`}>
          <FaUsers size={20} />
          <span className="text-xs mt-1">Contribute</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar