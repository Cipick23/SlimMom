// layout.js

import React from 'react';
import styles from './layout.module.css';
import useWindowSize from '../hooks/useWindowSize'; // presupunem că avem un hook pentru dimensiunea ferestrei

const Layout = () => {
  const size = useWindowSize();

  return (
    <>
      {size.width > 767 && (
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/banana.png"
              alt="Banana"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img src="/images/leafs.png" alt="Leafs" className={styles.image} />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/strawberry.png"
              alt="Strawberry"
              className={styles.image}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
