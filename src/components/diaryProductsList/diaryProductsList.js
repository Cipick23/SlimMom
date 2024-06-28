// DiaryProductsList.js

import React from 'react';
import styles from './diaryProductsList.module.css';

const DiaryProductsList = () => {
  // Presupunem că ai o listă de produse stocată undeva
  const products = ['Product 1', 'Product 2', 'Product 3'];

  return (
    <div className={styles.productsListContainer}>
      <h2>Products List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className={styles.productItem}>
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryProductsList;
