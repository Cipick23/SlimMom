// foodNotRecommended.js

import React from 'react';
import styles from './foodNotR.module.css';

const FoodNotRecommended = () => {
  const foodItemsNotRecommended = [
    'Sweets',
    'Fast Food',
    'Soda',
    'Fried Foods',
    'Processed Snacks',
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Foods you should not eat</h3>
      <ul className={styles.itemList}>
        {foodItemsNotRecommended.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodNotRecommended;
