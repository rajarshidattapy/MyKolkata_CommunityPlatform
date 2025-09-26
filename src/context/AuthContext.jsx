import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth as useClerkAuth, useUser } from '@clerk/clerk-react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { isSignedIn, signOut } = useClerkAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const previousAuthState = useRef(isSignedIn);

  useEffect(() => {
    // Only redirect when user transitions from not signed in to signed in
    // and they're on an auth page
    if (isSignedIn && !previousAuthState.current && user) {
      const authPages = ['/', '/login', '/signup'];
      
      if (authPages.includes(location.pathname)) {
        console.log('Redirecting newly signed in user to /home');
        navigate('/home');
      }
    }
    
    previousAuthState.current = isSignedIn;
  }, [isSignedIn, user, navigate, location.pathname]);

  const logout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated: isSignedIn, 
      user,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}