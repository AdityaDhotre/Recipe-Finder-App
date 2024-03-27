// Author: Aditya Dhotre

import React, { createContext, useContext, useState } from 'react';

// Create a context for managing user authentication
const AuthContext = createContext();

// Custom hook to access authentication context
export function useAuth() {
  return useContext(AuthContext);
}

// Component responsible for managing authentication state
export function AuthProvider({ children }) {
  // State to track the authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user login
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to handle user logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Object containing authentication state and methods
  const value = {
    isAuthenticated,
    login,
    logout,
  };

  // Provide the authentication context to the application
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


