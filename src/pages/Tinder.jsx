import React, { useState, useRef, useEffect } from 'react'
import { FaHeart, FaTimes } from 'react-icons/fa'

const DESCRIPTION_LIMIT = 180;

const profiles = [
  {
    id: '1',
    name: 'Victoria Memorial',
    age: '100+',
    bio: 'Majestic marble building dedicated to Queen Victoria. Looking for history enthusiasts!',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800'
  },
  {
    id: '2',
    name: 'Netaji Subhash Chandra Bose',
    age: '150+',
    bio: 'Netaji Subhas Chandra Bose was a prominent Indian freedom fighter and leader who played a key role in India\'s struggle for independence, known for his leadership of the Indian National Army (INA) and his call for "Give me blood, and I shall give you freedom.',
    image: 'nscb.webp'
  },
  {
    id: '3',
    name: 'Jorasanko Thakur Bari, North Kolkata',
    age: '80+',
    bio: 'Jorasanko Thakur Bari, the ancestral home of Rabindranath Tagore, offers visitors a glimpse into the rich cultural and literary history of Bengal, showcasing the life and legacy of the Nobel laureate.',
    image: 'jstb.jpg'
  },
  {
    id: '4',
    name: 'Maidan',
    age:'250+',
    bio:'The British cleared a vast area of jungle and settlements around the fort to create an open space, primarily for military defense, which later became the Maidan.Today, it is the largest urban park in Kolkata and is often called the "Lungs of Kolkata." It covers over 1,000 acres, stretching from Raj Bhavan to the Hooghly River, and is home to landmarks like the Victoria Memorial, Eden Gardens, and Shaheed Minar.',
    image: 'maidan.jpg'
  },
  {
    id: '5',
    name: 'Indian Museum',
    age:'210+',
    bio:'It was founded in 1814, making it the oldest museum in India and one of the oldest in the world.',
    image: 'indmus.jpg'
  },
  {
    id: '6',
    name: 'Dakshineswar Kali Temple',
    age:'170+',
    bio:'The Dakshineswar Kali Temple is one of the most famous temples in West Bengal, dedicated to Goddess Kali. It is located on the eastern bank of the Hooghly River in Dakshineswar, Kolkata.',
    image: 'dkt.jpg'
  },

]

function Tinder() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [drag, setDrag] = useState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 })
  const [showFeedback, setShowFeedback] = useState(false)
  const [showFeedbackInput, setShowFeedbackInput] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')
  const [pendingSwipe, setPendingSwipe] = useState(null) // {direction: 1|-1}
  const [cardVisible, setCardVisible] = useState(true)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const cardRef = useRef(null)

  // Animate card entrance
  useEffect(() => {
    setCardVisible(true)
    if (cardRef.current) {
      cardRef.current.style.transition = 'none'
      cardRef.current.style.transform = 'scale(0.95) translateY(40px)'
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = 'transform 0.4s cubic-bezier(.22,1,.36,1)'
          cardRef.current.style.transform = 'scale(1) translateY(0)'
        }
      }, 30)
    }
    setShowFeedbackInput(false)
    setFeedbackText('')
  }, [currentIndex])

  // Mouse events
  const handleMouseDown = (e) => {
    setDrag({ ...drag, isDragging: true, startX: e.clientX, startY: e.clientY })
    document.body.style.userSelect = 'none'
  }
  const handleMouseMove = (e) => {
    if (!drag.isDragging) return
    const dx = e.clientX - drag.startX
    setDrag((d) => ({ ...d, x: dx }))
    if (cardRef.current) {
      cardRef.current.style.transition = 'none'
      cardRef.current.style.transform = `translateX(${dx}px) rotate(${dx * 0.1}deg)`
    }
  }
  const handleMouseUp = () => {
    if (!drag.isDragging) return
    const threshold = window.innerWidth * 0.25
    if (Math.abs(drag.x) > threshold) {
      const direction = drag.x > 0 ? 1 : -1
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.3s ease'
        cardRef.current.style.transform = `translateX(${direction * 500}px) rotate(${direction * 30}deg)`
      }
      setTimeout(() => {
        setCardVisible(false)
        setTimeout(() => {
          setPendingSwipe({ direction })
          setShowFeedback(true)
          setDrag({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 })
          if (cardRef.current) cardRef.current.style.transform = 'none'
        }, 100)
      }, 300)
    } else {
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.3s cubic-bezier(.22,1,.36,1)'
        cardRef.current.style.transform = 'none'
      }
      setDrag({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 })
    }
    document.body.style.userSelect = ''
  }

  // Touch events
  const handleTouchStart = (e) => {
    setDrag({ ...drag, isDragging: true, startX: e.touches[0].clientX, startY: e.touches[0].clientY })
  }
  const handleTouchMove = (e) => {
    if (!drag.isDragging) return
    const dx = e.touches[0].clientX - drag.startX
    setDrag((d) => ({ ...d, x: dx }))
    if (cardRef.current) {
      cardRef.current.style.transition = 'none'
      cardRef.current.style.transform = `translateX(${dx}px) rotate(${dx * 0.1}deg)`
    }
  }
  const handleTouchEnd = () => {
    const threshold = window.innerWidth * 0.25
    if (Math.abs(drag.x) > threshold) {
      const direction = drag.x > 0 ? 1 : -1
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.3s ease'
        cardRef.current.style.transform = `translateX(${direction * 500}px) rotate(${direction * 30}deg)`
      }
      setTimeout(() => {
        setCardVisible(false)
        setTimeout(() => {
          setPendingSwipe({ direction })
          setShowFeedback(true)
          setDrag({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 })
          if (cardRef.current) cardRef.current.style.transform = 'none'
        }, 100)
      }, 300)
    } else {
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.3s cubic-bezier(.22,1,.36,1)'
        cardRef.current.style.transform = 'none'
      }
      setDrag({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 })
    }
  }

  // Handler to move to next card after feedback
  const handleFeedbackDone = () => {
    setShowFeedback(false)
    setShowFeedbackInput(false)
    setFeedbackText('')
    setPendingSwipe(null)
    setCardVisible(true)
    setCurrentIndex((prev) => (prev + 1) % profiles.length)
  }

  if (currentIndex >= profiles.length) {
    return (
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No more profiles!</h2>
          <button
            onClick={() => setCurrentIndex(0)}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  const profile = profiles[currentIndex]
  const isDescriptionLong = profile.bio.length > DESCRIPTION_LIMIT;
  const shortDescription = isDescriptionLong ? profile.bio.slice(0, DESCRIPTION_LIMIT) + '...' : profile.bio;

  // Edge glow logic
  const glowStrength = Math.min(Math.abs(drag.x) / (window.innerWidth * 0.25), 1)
  const showLeftGlow = drag.x < -30 && drag.isDragging
  const showRightGlow = drag.x > 30 && drag.isDragging

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-1 items-center justify-center overflow-hidden pb-24 bg-inherit z-0" style={{paddingTop: '64px', minHeight: '0', height: 'calc(100vh - 0px)'}}>
      {/* Edge Glows */}
      {showLeftGlow && !showFeedback && (
        <div className="pointer-events-none fixed left-0 top-0 h-full w-1/3 z-40" style={{background: `radial-gradient(circle at left, rgba(239,68,68,${0.3 * glowStrength}) 0%, transparent 80%)`}}></div>
      )}
      {showRightGlow && !showFeedback && (
        <div className="pointer-events-none fixed right-0 top-0 h-full w-1/3 z-40" style={{background: `radial-gradient(circle at right, rgba(34,197,94,${0.3 * glowStrength}) 0%, transparent 80%)`}}></div>
      )}
      {/* Card - only show when feedback popup is not visible and cardVisible is true */}
      {!showFeedback && cardVisible && (
        <div
          ref={cardRef}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[350px] h-[520px] max-w-full mx-auto p-0 select-none cursor-grab z-50 flex flex-col items-center overflow-hidden"
          style={{ touchAction: 'pan-y', minHeight: '520px', maxHeight: '520px', minWidth: '350px', maxWidth: '350px', display: 'flex', flexDirection: 'column' }}
          onMouseDown={handleMouseDown}
          onMouseMove={drag.isDragging ? handleMouseMove : undefined}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-56 object-cover rounded-t-2xl"
            style={{ minHeight: '224px', maxHeight: '224px' }}
          />
          <div className="flex-1 flex flex-col justify-center items-center w-full px-5 pb-5 min-h-[180px]">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center w-full">
              {profile.name}, <span className="text-orange-600">{profile.age}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-left w-full overflow-hidden text-ellipsis" style={{display: '-webkit-box', WebkitLineClamp: 7, WebkitBoxOrient: 'vertical'}}>
              {shortDescription}
              {isDescriptionLong && (
                <span className="text-blue-500 cursor-pointer ml-1 hover:underline" onClick={() => setShowFullDescription(true)}>
                  Read more
                </span>
              )}
            </p>
          </div>
        </div>
      )}
      {/* Full Description Modal */}
      {showFullDescription && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 animate-fadein">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md w-full text-center animate-fadein">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{profile.name}, <span className="text-orange-600">{profile.age}</span></h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line text-left">{profile.bio}</p>
            <button className="mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700" onClick={() => setShowFullDescription(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      {/* Feedback Popup */}
      {showFeedback && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 animate-fadein">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-w-[300px] text-center animate-fadein">
            {!showFeedbackInput ? (
              <>
                <div className="text-lg font-semibold mb-4">Feedback?</div>
                <div className="flex justify-center gap-8 text-3xl">
                  <button onClick={() => setShowFeedbackInput(true)} className="hover:scale-110 transition-transform">✅</button>
                  <button onClick={handleFeedbackDone} className="hover:scale-110 transition-transform">❌</button>
                </div>
              </>
            ) : (
              <>
                <div className="text-lg font-semibold mb-2">Your Feedback</div>
                <textarea
                  className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
                  rows={3}
                  placeholder="Type your feedback..."
                  value={feedbackText}
                  onChange={e => setFeedbackText(e.target.value)}
                  autoFocus
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={handleFeedbackDone}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Tinder
