import React, { useEffect, useState } from 'react';
import styles from './App.css';
import { Route, Routes } from 'react-router-dom';
import DiaryPage from './../pages/diaryPage/diaryPage.js';
import RegistrationPage from './../pages/registrationPage/registrationPage.js';
import LoginPage from './../pages/loginPage/loginPage.js';
import MainPage from 'pages/mainPage/mainPage';
import { useNavigate } from 'react-router-dom';
import Header from './header/header.js';
import CalculatorPage from './../pages/calculatorPage/calculatorPage.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token:', token); // Asigură-te că token-ul este corect

    const storedUserName = localStorage.getItem('userName');
    console.log('Stored userName:', storedUserName);

    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleLogin = userName => {
    setIsAuthenticated(true);
    setUserName(userName);
    localStorage.setItem('userName', userName);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div className={styles.appContainer}>
      <Header
        isAuthenticated={isAuthenticated}
        userName={userName}
        onLogout={handleLogout}
      />
      <div className={styles.layout}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/calculator"
            element={<CalculatorPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/diary"
            element={<DiaryPage isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
