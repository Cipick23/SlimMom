// authContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const register = async (username, password) => {
    // Simulează o cerere de înregistrare către backend sau folosește un serviciu extern
    // Aici poți adăuga logica pentru a trimite datele către server sau a le stoca local

    // Simulează o înregistrare reușită
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
