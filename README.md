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
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **ML/NLP Service:** Python, FastAPI, VADER Sentiment
- **Scraping:** Python, BeautifulSoup (Justdial)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
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
npm install
cd backend
npm install
cd ..
```

### 3. Set Up Environment Variables
- In `backend/`, create a `.env` file:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  PORT=5001
  ```

### 4. Set Up Python Environment
```bash
pip install -r requirements.txt
```

### 5. Seed the Database (with external ratings)
```bash
node backend/seedPlaces.js
# (and other seed scripts as needed)
```
- This will automatically scrape Justdial for each place and set the base rating.

### 6. Start All Services
- **Backend:**
  ```bash
  cd backend
  npm start
  ```
- **Frontend:**
  ```bash
  npm run dev
  ```
- **Python Sentiment Service:**
  ```bash
  uvicorn sentiment_service:app --reload
  ```

---

## 📝 Usage

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

## 📈 Features in Progress
- Real-time updates
- More external data sources (Zomato, Google Maps)
- Admin dashboard for moderation

---

## 📞 Contact
For questions, suggestions, or contributions, please reach out to the project maintainers.

---

**Made with ❤️ for Kolkata**
