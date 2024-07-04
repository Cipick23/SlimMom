import React from 'react';
import styles from './App.css';
import Navigation from './../components/header/navigation.js';
import { AuthProvider } from './../router/authContext.js'; // importăm AuthProvider
import CalorieForm from './calorieForm/dailyCaloriesForm.js';
import { Route, Routes } from 'react-router-dom';
import DailyCaloriesForm from './calorieForm/dailyCaloriesForm.js';
import DiaryPage from './../pages/diaryPage/diaryPage.js';
import RegistrationPage from './../pages/registrationPage/registrationPage.js';
import LoginPage from './../pages/loginPage/loginPage.js';

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
