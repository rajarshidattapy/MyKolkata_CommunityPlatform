# MyKolkata 🌆

A comprehensive web application to explore, discover, and connect with the vibrant city of Kolkata. Now with dynamic, ML-powered experience ratings, external data integration, and a modern feedback system.

---

## ✨ Features

- **Home Dashboard:** News, marketplace, and quick links.
- **Places Discovery:** Cafes, attractions, and destinations with real user and external ratings.
- **Pujo Special:** Durga Puja regions, map, and pandals.
- **Transport Guide:** Local, metro, and train info.
- **Tinder Experience:**
  - Swipeable cards for city experiences.
  - **External Ratings:** Each experience is initialized with a real-world rating (Justdial scraping).
  - **User Feedback:** Users submit a star rating (1–5) and written feedback.
  - **ML Sentiment:** Feedback text is analyzed by a Python FastAPI service (VADER NLP) and blended with the user’s star rating.
  - **Dynamic App Rating:** The app rating is a weighted average of the external rating and all user feedback, updating in real time.
  - **Both external and app ratings are displayed.**
- **Community & Contribute:** Share stories, join communities.
- **Modern UI/UX:** Responsive, dark/light mode, beautiful transitions.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Python, FastAPI, MongoDB
- **ML/NLP Service:** Python, FastAPI, VADER Sentiment
- **Scraping:** Python, BeautifulSoup (Justdial)
- **Database:** MongoDB with automatic seeding and Pydantic v2 models

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher) - for frontend only
- Python 3.8+
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd MyKolkata
```

### 2. Install Dependencies
```bash
# Frontend dependencies
npm install

# Backend dependencies (FastAPI)
cd backend2
pip install -r requirements.txt
cd ..
```

### 3. Set Up Environment Variables
- In `backend2/`, create a `.env` file:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  PORT=5001
  ```

### 4. Set Up Python Environment
```bash
pip install -r requirements.txt
```

### 5. Database Auto-Seeding ✨
**No manual seeding required!** The FastAPI backend automatically seeds the database on startup with:
- Communities (4 documents)
- Marketplace items (3 documents)  
- News articles (3 documents)
- Places (9 documents with external ratings from Justdial)
- Pandals (4 documents)
- Regions (3 documents)
- Tinder profiles (6 documents)
- Transport data (30 documents)

The seeding process:
- Only runs if collections are empty (smart duplicate detection)
- Includes external ratings scraped from Justdial
- Provides real-time logging and statistics

### 6. Start All Services
- **FastAPI Backend:**
  ```bash
  cd backend2
  uvicorn main:app --reload --port 5001
  ```
  You'll see:
  - ✅ MongoDB connection established
  - 🌱 Database auto-seeding completed
  - 📊 Database statistics displayed
  - 🎯 All API endpoints ready

- **Frontend:**
  ```bash
  npm run dev
  ```
- **Python Sentiment Service:**
  ```bash
  uvicorn sentiment_service:app --reload
  ```

---

## � FastAPI Backend Features

- **Auto-Seeding:** Database automatically populates on startup with 62 documents across 8 collections
- **MongoDB Integration:** Async Motor driver with Pydantic v2 models for type safety
- **RESTful APIs:** Complete CRUD operations for all data types
- **Real-time Monitoring:** 
  - `/database/stats` - View collection statistics
  - `/database/reseed` - Manually trigger reseeding
- **Smart Duplicate Detection:** Won't re-seed existing data
- **Comprehensive Logging:** Startup process, seeding status, and API requests
- **CORS Enabled:** Ready for frontend integration

### API Endpoints
- `GET /api/communities/` - Community data
- `GET /api/marketplace/` - Marketplace items  
- `GET /api/news/` - News articles
- `GET /api/places/` - Places with ratings
- `GET /api/pandals/` - Durga Puja pandals
- `GET /api/regions/` - Kolkata regions
- `GET /api/tinder-profiles/` - Swipeable experiences
- `GET /api/transport/` - Transport information

---

## �📝 Usage

- Open the app at [http://localhost:5173](http://localhost:5173)
- Explore places, swipe on experiences, and submit feedback with a star rating and text.
- The app rating for each experience will update dynamically, blending external and user feedback.
- Both the external (Justdial) and app ratings are shown for transparency.

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📈 Recent Updates
- ✅ **Backend Migration:** Migrated from Node.js/Express to Python/FastAPI
- ✅ **Auto-Seeding:** Database automatically populates on startup  
- ✅ **Async MongoDB:** Using Motor async driver with Pydantic v2
- ✅ **Type Safety:** Full type validation with Pydantic models
- ✅ **Real-time Monitoring:** Database statistics and manual reseeding endpoints

## 📈 Features in Progress
- Real-time updates
- More external data sources (Zomato, Google Maps)
- Admin dashboard for moderation
- Enhanced authentication system

---

## 📞 Contact
For questions, suggestions, or contributions, please reach out to the project maintainers.

---

**Made with ❤️ for Kolkata**
