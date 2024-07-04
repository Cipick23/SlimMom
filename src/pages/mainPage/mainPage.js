// mainPage.js

import React from 'react';
import styles from './mainPage.module.css';
import DailyCaloriesForm from './../../components/calorieForm/dailyCaloriesForm.js';

const MainPage = () => {
  return (
    <main className={styles.mainPageContainer}>
      <DailyCaloriesForm />
    </main>
  );
};

export default MainPage;
