import React from 'react';
import styles from './App.css';
import Navigation from './header/navigation';
import { AuthProvider } from './../router/authContext.js'; // importăm AuthProvider
import CalorieForm from './calorieForm/dailyCaloriesForm.js';
import Registration from './../pages/registrationPage/registration.js'; // Presupunem că există o componentă Registration pentru ruta /registration
import { Route, Routes } from 'react-router-dom';
import DailyCaloriesForm from './calorieForm/dailyCaloriesForm.js';
import Login from 'pages/loginPage/login.js';
import DiaryPage from 'pages/diaryPage/diaryPage.js';

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
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
