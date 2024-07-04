// DiaryAddProductForm.js
import React, { useState } from 'react';
import styles from './diaryAddProductForm.module.css';

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Adaugă logica pentru a trimite produsul adăugat
    console.log('Product added:', product);
    setProduct('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={product}
        onChange={e => setProduct(e.target.value)}
        placeholder="Add a product"
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Add Product
      </button>
    </form>
  );
};

export default DiaryAddProductForm;
