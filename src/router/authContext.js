// authContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    // Aici poți implementa logica pentru setarea token-ului sau a altor informații de sesiune
  };

  const logout = () => {
    setIsLoggedIn(false);
    // Implementează logica pentru deconectare
  };

  const register = userData => {
    // Implementează logica pentru înregistrare utilizator
    // Poți folosi API-urile necesare pentru a trimite datele către server și a gestiona înregistrarea
    console.log('Registering user:', userData);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
