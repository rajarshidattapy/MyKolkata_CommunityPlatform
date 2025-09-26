"""
Seed data for FastAPI backend
Contains all initial data to be loaded on startup
"""
from datetime import datetime

# Communities Data
COMMUNITIES_DATA = [
    {
        "name": "GDG Kolkata",
        "description": "Google Developer Group Kolkata - Tech community",
        "link": "https://gdg.community.dev/gdg-kolkata/",
        "icon": "FaMeetup"
    },
    {
        "name": "TFUG Kolkata", 
        "description": "TensorFlow User Group Kolkata",
        "link": "https://www.tensorflow.org/community/groups",
        "icon": "FaMeetup"
    },
    {
        "name": "Calcutta Instagrammers",
        "description": "Photography and city stories",
        "link": "https://www.instagram.com/calcutta.instagrammers/",
        "icon": "FaInstagram"
    },
    {
        "name": "Streets of Calcutta",
        "description": "Daily life and culture", 
        "link": "https://www.instagram.com/streetsofcalcutta/",
        "icon": "FaInstagram"
    }
]

# Marketplace Data
MARKETPLACE_DATA = [
    {
        "title": "Handloom Sarees - Bengal's pride.",
        "location": "Gariahat Market",
        "price": "₹1,500 onwards",
        "image": "/sare.jpg",
        "link": "https://www.orangewayfarer.com/best-saree-shops-in-kolkata/"
    },
    {
        "title": "Bengali Sweets - The best of the best.",
        "location": "New Market", 
        "price": "₹20 onwards",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        "link": "https://balarammullick.com/"
    },
    {
        "title": "Bongmade - Bengali Merch with a modern twist.",
        "location": "Online",
        "price": "₹199 onwards", 
        "image": "/shirt.webp",
        "link": "https://bongmade.com/"
    }
]

# News Data
NEWS_DATA = [
    {
        "title": "Anandabazar Patrika today",
        "description": "এগিয়ে থাকে,এগিয়ে রাখে।",
        "image": "/ana.jpg",
        "link": "https://epaper.anandabazar.com/"
    },
    {
        "title": "International Book Fair '25",
        "description": "The biggest literary event of the year! This year was great!",
        "image": "/bkf.avif", 
        "link": "https://kolkatabookfair.net/download-ikbf-app"
    },
    {
        "title": "Kolkata Derby: EB vs MB",
        "description": "The age-old rivalry continues! Don't miss the epic clash this weekend.",
        "image": "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
        "link": "https://www.google.com/search?q=east+bengal+vs+mohun+bagan+match+today+kolkata"
    }
]

# Places Data
PLACES_DATA = [
    # Cafes
    {
        "name": "Flurys",
        "type": "Cafe",
        "location": "Park Street",
        "description": "Iconic cafe known for its European-style cakes and pastries.",
        "image": "/flury.avif",
        "rating": 4.5,
        "status": "Open now"
    },
    {
        "name": "Paris Cafe",
        "type": "Cafe", 
        "location": "Park Street",
        "description": "Cozy cafe serving French pastries and coffee.",
        "image": "/street.jpg",
        "rating": 4.3,
        "status": "Open now"
    },
    {
        "name": "Mocambo",
        "type": "Cafe",
        "location": "Park Street",
        "description": "Vintage restaurant with Continental cuisine.",
        "image": "/moc.jpg",
        "rating": 4.6,
        "status": "Open now"
    },
    # Kolkata Attractions
    {
        "name": "Victoria Memorial",
        "type": "Monument",
        "location": "Central Kolkata", 
        "description": "Majestic marble building and museum.",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800",
        "rating": 4.8,
        "status": "Open now"
    },
    {
        "name": "Howrah Bridge",
        "type": "Bridge",
        "location": "Howrah",
        "description": "Iconic cantilever bridge over Hooghly River.",
        "image": "/hwh.jpg",
        "rating": 4.7,
        "status": "Open now"
    },
    {
        "name": "Indian Museum",
        "type": "Museum",
        "location": "Park Street",
        "description": "Oldest and largest museum in India.",
        "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
        "rating": 4.5,
        "status": "Closes at 5 PM"
    },
    # West Bengal Destinations
    {
        "name": "Darjeeling",
        "type": "Hill Station",
        "location": "West Bengal",
        "description": "Queen of Hills with tea gardens and mountain views.",
        "image": "/dar.webp",
        "rating": 4.8,
        "status": "Open now"
    },
    {
        "name": "Sundarbans",
        "type": "Forest",
        "location": "West Bengal",
        "description": "World's largest mangrove forest.",
        "image": "/sundarban.jpg",
        "rating": 4.7,
        "status": "Open now"
    },
    {
        "name": "Digha",
        "type": "Beach",
        "location": "West Bengal",
        "description": "Popular beach destination.",
        "image": "/dig.jpg",
        "rating": 4.4,
        "status": "Open now"
    }
]

# Pandals Data
PANDALS_DATA = [
    {
        "name": "Bagbazar Sarbojanin",
        "location": "Bagbazar, Kolkata",
        "description": "One of the oldest and most popular Durga Puja celebrations in Kolkata, known for its traditional approach and cultural significance.",
        "image": "https://images.unsplash.com/photo-1601181487375-f2194c87a04b?w=800",
        "distance": "2.5 km",
        "rating": 4.8
    },
    {
        "name": "Mohammad Ali Park",
        "location": "Central Kolkata",
        "description": "Famous for its unique themes and elaborate decorations, this pandal attracts thousands of visitors every year.",
        "image": "https://images.unsplash.com/photo-1601931935934-17c3717239ab?w=800",
        "distance": "3.1 km",
        "rating": 4.6
    },
    {
        "name": "College Square",
        "location": "College Street",
        "description": "Known for its stunning water body reflections and lighting arrangements, making it a photographer's paradise.",
        "image": "https://images.unsplash.com/photo-1592305029529-4a6a3d0cde1c?w=800",
        "distance": "1.8 km",
        "rating": 4.7
    },
    {
        "name": "Victoria Memorial",
        "location": "Central Kolkata",
        "description": "Historic marble building and museum showcasing British-era architecture.",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800",
        "distance": "4.2 km",
        "rating": 4.9
    }
]

# Regions Data
REGIONS_DATA = [
    {
        "name": "North Kolkata",
        "description": "Traditional pujas with heritage touch",
        "image": "https://assets.telegraphindia.com/telegraph/2021/Nov/1636726963_img_8377-jpg.jpg"
    },
    {
        "name": "Central Kolkata",
        "description": "Modern themes with grand displays",
        "image": "https://www.shutterstock.com/shutterstock/videos/3485372951/thumb/1.jpg?ip=x480"
    },
    {
        "name": "South Kolkata",
        "description": "Contemporary art meets tradition",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kolkata_South_Central_CBD_%2811%29.jpg"
    }
]

# Tinder Profiles Data
TINDER_PROFILES_DATA = [
    {
        "name": "Victoria Memorial",
        "age": "100+",
        "bio": "Majestic marble building dedicated to Queen Victoria. Looking for history enthusiasts!",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800",
        "baseStars": 4.8,
        "averageStars": 4.8,
        "feedbacks": []
    },
    {
        "name": "Netaji Subhash Chandra Bose",
        "age": "150+",
        "bio": "Netaji Subhas Chandra Bose was a prominent Indian freedom fighter and leader who played a key role in India's struggle for independence, known for his leadership of the Indian National Army (INA) and his call for \"Give me blood, and I shall give you freedom.\"",
        "image": "nscb.webp",
        "baseStars": 4.9,
        "averageStars": 4.9,
        "feedbacks": []
    },
    {
        "name": "Jorasanko Thakur Bari, North Kolkata",
        "age": "80+",
        "bio": "Jorasanko Thakur Bari, the ancestral home of Rabindranath Tagore, offers visitors a glimpse into the rich cultural and literary history of Bengal, showcasing the life and legacy of the Nobel laureate.",
        "image": "jstb.jpg",
        "baseStars": 4.7,
        "averageStars": 4.7,
        "feedbacks": []
    },
    {
        "name": "Maidan",
        "age": "250+",
        "bio": "The British cleared a vast area of jungle and settlements around the fort to create an open space, primarily for military defense, which later became the Maidan.Today, it is the largest urban park in Kolkata and is often called the \"Lungs of Kolkata.\"",
        "image": "maidan.jpg",
        "baseStars": 4.6,
        "averageStars": 4.6,
        "feedbacks": []
    },
    {
        "name": "Indian Museum",
        "age": "210+",
        "bio": "It was founded in 1814, making it the oldest museum in India and one of the oldest in the world.",
        "image": "indmus.jpg",
        "baseStars": 4.5,
        "averageStars": 4.5,
        "feedbacks": []
    },
    {
        "name": "Dakshineswar Kali Temple",
        "age": "170+",
        "bio": "The Dakshineswar Kali Temple is one of the most famous temples in West Bengal, dedicated to Goddess Kali. It is located on the eastern bank of the Hooghly River in Dakshineswar, Kolkata.",
        "image": "dkt.jpg",
        "baseStars": 4.8,
        "averageStars": 4.8,
        "feedbacks": []
    }
]

# Transport Data
TRANSPORT_DATA = [
    # Auto Stands
    {"category": "auto", "name": "Gariahat Crossing", "distance": "0.3 km", "time": "2 mins"},
    {"category": "auto", "name": "Rashbehari Crossing", "distance": "0.8 km", "time": "5 mins"},
    {"category": "auto", "name": "Golpark", "distance": "1.2 km", "time": "7 mins"},
    
    # Bus Stands
    {"category": "bus", "name": "Gariahat Bus Stop", "distance": "0.5 km", "time": "5 mins", "routes": ["S24", "VS5", "47B"]},
    {"category": "bus", "name": "Ballygunge Phari", "distance": "1.2 km", "time": "8 mins", "routes": ["S24", "VS5", "47B"]},
    {"category": "bus", "name": "Golpark Bus Stand", "distance": "1.5 km", "time": "10 mins", "routes": ["S24", "VS5", "47B"]},
    
    # Taxi Stands
    {"category": "taxi", "name": "Gariahat Taxi Stand", "distance": "0.4 km", "time": "3 mins"},
    {"category": "taxi", "name": "Ballygunge Station", "distance": "1.0 km", "time": "6 mins"},
    {"category": "taxi", "name": "Southern Avenue", "distance": "1.3 km", "time": "8 mins"},
    
    # Metro Stations
    {"category": "metro", "name": "Kalighat Metro", "distance": "0.8 km", "time": "10 mins walk"},
    {"category": "metro", "name": "Jatin Das Park", "distance": "1.2 km", "time": "15 mins walk"},
    {"category": "metro", "name": "Maidan", "distance": "1.5 km", "time": "18 mins walk"},
    
    # Metro Schedule
    {"category": "metro", "from_station": "Kavi Subhash", "to_station": "Dakshineswar", "time": "10:00 AM"},
    {"category": "metro", "from_station": "Dakshineswar", "to_station": "Kavi Subhash", "time": "10:15 AM"},
    {"category": "metro", "from_station": "Kavi Subhash", "to_station": "Dakshineswar", "time": "10:30 AM"},
    
    # Train Schedule - Howrah
    {"category": "train", "name": "Bandel Local", "platform": "1", "time": "10:30 AM"},
    {"category": "train", "name": "Burdwan Express", "platform": "3", "time": "11:00 AM"},
    {"category": "train", "name": "Katwa Local", "platform": "2", "time": "11:30 AM"},
    
    # Train Schedule - Sealdah
    {"category": "train", "name": "Barrackpore Local", "platform": "1", "time": "10:45 AM"},
    {"category": "train", "name": "Naihati Local", "platform": "2", "time": "11:15 AM"},
    {"category": "train", "name": "Krishnanagar Express", "platform": "4", "time": "11:45 AM"}
]