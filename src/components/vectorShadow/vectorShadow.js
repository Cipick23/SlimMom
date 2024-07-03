// layout.js

import React from 'react';
import styles from './layout.module.css';
import useWindowSize from '../hooks/useWindowSize'; // presupunem că avem un hook pentru dimensiunea ferestrei

const VectorShadow = () => {
  const size = useWindowSize();

  return (
    <>
      {size.width > 767 && (
        <div className={styles.container}>
          <div className={styles.vectorShadow}></div>
        </div>
      )}
    </>
  );
};

export default VectorShadow;
