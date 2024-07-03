// diaryPage.js

import React from 'react';
import styles from './diaryPage.module.css';
import DiaryDateCalendar from 'components/diaryDateCalendar/diaryDateCalendar.js';
import DiaryAddProductForm from 'components/diaryAddProductForm/diaryAddProductForm.js';
import DiaryProductsList from 'components/diaryProductsList/diaryProductsList.js';
import DailyCalorieIntake from './../../components/dailyCalorieIntake/dailyCalorieIntake.js';

const DiaryPage = () => {
  return (
    <div className={styles.diaryPageContainer}>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <DailyCalorieIntake />
    </div>
  );
};

export default DiaryPage;
