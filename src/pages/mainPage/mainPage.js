// mainPage.js

import React from 'react';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/dailyCaloriesForm';
import styles from './mainPage.module.css';

const MainPage = () => {
  return (
    <main className={styles.mainPageContainer}>
      <DailyCaloriesForm />
    </main>
  );
};

export default MainPage;
