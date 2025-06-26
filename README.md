# MyKolkata 🌆

A comprehensive web application designed to help users explore, discover, and connect with the vibrant city of Kolkata. Built with modern web technologies, MyKolkata offers an interactive platform for discovering places, events, and local experiences in the City of Joy.

## ✨ Features

### 🏠 **Home Dashboard**
- Welcome hero section with stunning visuals
- Recent news and updates about Kolkata
- Marketplace showcasing local products and services
- Quick access to explore places and events

### 🗺️ **Places Discovery**
- Interactive map and location-based exploration
- Detailed information about popular destinations
- User reviews and ratings
- Filtering and search capabilities

### 🎭 **Pujo Special**
- Dedicated section for Durga Puja celebrations
- Pandal locations and schedules
- Cultural events and activities
- Community engagement features

### 🚇 **Transport Guide**
- Public transportation information
- Route planning and navigation
- Real-time updates and schedules
- Local transport tips and recommendations

### 👥 **User Features**
- Secure authentication system
- User profiles and preferences
- Contribution system for adding new places
- Community-driven content

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Dark/Light mode toggle
- Intuitive navigation
- Beautiful animations and transitions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Frontend Setup
```bash
# Clone the repository
git clone <repository-url>
cd MyKolkata

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with your configuration
cp .env.example .env

# Start the server
npm start
```

### Environment Variables
Create a `.env` file in the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 🚀 Usage

1. **Start the application**
   - Frontend will run on `http://localhost:5173`
   - Backend will run on `http://localhost:5000`

2. **Authentication**
   - Register a new account or login with existing credentials
   - Access protected routes and features

3. **Explore Kolkata**
   - Browse through different sections: Places, Pujo, Transport
   - Discover local attractions and events
   - Contribute by adding new places or reviews

4. **Customize Experience**
   - Toggle between light and dark themes
   - Update your profile preferences
   - Save favorite places and routes

## 📁 Project Structure

```
MyKolkata/
├── backend/                 # Backend server
│   ├── middleware/         # Authentication middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── server.js          # Main server file
├── public/                # Static assets
├── src/                   # Frontend source code
│   ├── components/        # Reusable UI components
│   ├── context/          # React context providers
│   ├── pages/            # Page components
│   └── main.jsx          # Application entry point
├── package.json           # Frontend dependencies
└── README.md             # Project documentation
```

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start the server
- `npm test` - Run tests (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Features in Processing

1. NLP based swipe engine to filter the best experiences for citizens.
2. Voices of Kolkata - shorts to involve the souls who capture the essence of the city.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Kolkata's rich cultural heritage and vibrant community
- Open source community for amazing tools and libraries
- All contributors and supporters of this project

## 📞 Contact

For questions, suggestions, or contributions, please reach out to the project maintainers.

---

**Made with ❤️ for Kolkata**
