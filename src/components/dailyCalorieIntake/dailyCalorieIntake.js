// dailyCalorieIntake.js

import React, { useState, useEffect } from 'react';
import styles from './dailyCalorieIntake.module.css';

const DailyCalorieIntake = () => {
  const [foodItems, setFoodItems] = useState([]);
  // const [dailyRate, setDailyRate] = useState([]); // Exemplu de rată zilnică, poate fi dintr-un API sau context
  const [notRecommendedItems, setNotRecommendedItems] = useState([]);

  useEffect(() => {
    // Exemplu de date preluate dintr-o sursă externă sau API
    const fetchData = async () => {
      const foodData = await fetch('/api/foodItems').then(res => res.json());
      setFoodItems(foodData);

      const notRecommendedData = await fetch('/api/notRecommendedItems').then(
        res => res.json()
      );
      setNotRecommendedItems(notRecommendedData);
    };
    fetchData();
  }, []);

  const totalCalories = foodItems.reduce(
    (total, item) => total + item.calories,
    0
  );
  // const leftCalories = dailyRate - totalCalories;
  // const percentageOfNormal = ((totalCalories / dailyRate) * 100).toFixed(2);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Summary for 13.08.2023</h2>
      <ul className={styles.itemList}>
        {foodItems.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.calories}>{item.calories} kcal</span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <strong>Total Calories: </strong>
        <span>{totalCalories} kcal</span>
      </div>
      <div className={styles.summary}>
        <div>
          <strong>Left: </strong>
          {/* <span>{leftCalories > 0 ? leftCalories : 0} kcal</span> */}
        </div>
        <div>
          <strong>Consumed: </strong>
          <span>{totalCalories} kcal</span>
        </div>
        <div>
          <strong>Daily rate: </strong>
          {/* <span>{dailyRate} kcal</span> */}
        </div>
        <div>{/* <strong>{percentageOfNormal}% of normal</strong> */}</div>
      </div>
      <h2 className={styles.title}>Food not recommended</h2>
      <ul className={styles.itemList}>
        {notRecommendedItems.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.itemName}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyCalorieIntake;
