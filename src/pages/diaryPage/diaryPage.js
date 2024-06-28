// diaryPage.js

import React from 'react';
import styles from './diaryPage.module.css';
import DiaryDateCalendar from 'components/diaryDateCalendar/diaryDateCalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm/diaryAddProductForm';
import DiaryProductsList from 'components/diaryProductsList/diaryProductsList';

const DiaryPage = () => {
  return (
    <div className={styles.diaryPageContainer}>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};

export default DiaryPage;
