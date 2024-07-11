// calculatorPage.js

import React from 'react';
import CalculatorCalorieForm from '../../components/calculatorСalorieForm/calculatorСalorieForm.js';
import styles from './calculatorPage.module.css';
import DailyCalorieIntake from './../../components/dailyCalorieIntake/dailyCalorieIntake.js';

const CalculatorPage = () => {
  return (
    <main className={styles.calculatorPageContainer}>
      <h1 className={styles.calorieTitle}>
        Calculate your daily calorie intake right now
      </h1>
      <CalculatorCalorieForm />
      <DailyCalorieIntake />
    </main>
  );
};

export default CalculatorPage;
