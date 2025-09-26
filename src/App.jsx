import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import DarkModeToggle from './components/DarkModeToggle';
import UserMenu from './components/UserMenu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Places from './pages/Places';
import Tinder from './pages/Tinder';
import Pujo from './pages/Pujo';
import Transport from './pages/Transport';
import Profile from './pages/Profile';
import AboutCreator from './pages/AboutCreator';
import Contribute from './pages/Contribute';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {
  const { isAuthenticated } = useAuth(); // Access the current authentication state
  const location = useLocation(); // Get the current route
  const isAuthPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup'; // Check if we are on auth pages

  return (
    <div className="min-h-screen pb-16">
      {/* Show Navbar components only if user is authenticated and not on auth pages */}
      {isAuthenticated && !isAuthPage && (
        <>
          <TopNavbar />
          <DarkModeToggle />
          <UserMenu />
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/places"
          element={
            <ProtectedRoute>
              <Places />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tinder"
          element={
            <ProtectedRoute>
              <Tinder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pujo"
          element={
            <ProtectedRoute>
              <Pujo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transport"
          element={
            <ProtectedRoute>
              <Transport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about-creator"
          element={
            <ProtectedRoute>
              <AboutCreator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contribute"
          element={
            <ProtectedRoute>
              <Contribute />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
