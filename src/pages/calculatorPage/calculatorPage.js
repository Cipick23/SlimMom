// calculatorPage.js

import React from 'react';
import { useAuth } from '../router/authContext';
import { Navigate } from 'react-router-dom';
import CalculatorCalorieForm from '../../components/calculatorСalorieForm/calculatorСalorieForm.js';
import styles from './calculatorPage.module.css';
import DailyCalorieIntake from './../../components/dailyCalorieIntake/dailyCalorieIntake.js';
// import Layout from 'components/layout/layout';
// import VectorShadow from 'components/vectorShadow/vectorShadow';

const CalculatorPage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <main className={styles.calculatorPageContainer}>
      <CalculatorCalorieForm />
      <DailyCalorieIntake />
    </main>
  );
};

export default CalculatorPage;
