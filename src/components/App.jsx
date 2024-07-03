import React from 'react';
import styles from './App.css';
import Navigation from './header/navigation';
import { AuthProvider } from './../router/authContext.js'; // importăm AuthProvider
import CalorieForm from './calorieForm/dailyCaloriesForm.js';
import { Route, Routes } from 'react-router-dom';
import DailyCaloriesForm from './calorieForm/dailyCaloriesForm.js';
// import Login from 'pages/loginPage/loginPage';
import DiaryPage from 'pages/diaryPage/diaryPage.js';
import RegistrationPage from 'pages/registrationPage/registrationPage';
import LoginPage from 'pages/loginPage/loginPage';

const App = () => {
  return (
    <AuthProvider>
      <div className={styles.appContainer}>
        <Navigation />
        <div className={styles.layout}>
          <Routes>
            <Route path="/" element={<DailyCaloriesForm />} />{' '}
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/home" element={<CalorieForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
