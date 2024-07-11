// calculatorСalorieForm.js
import React, { useState } from 'react';
import styles from './calculatorСalorieForm.module.css';

const CalculatorCalorieForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!height) newErrors.height = 'Height is required';
    if (!age) newErrors.age = 'Age is required';
    if (!currentWeight) newErrors.currentWeight = 'Current weight is required';
    if (!desiredWeight) newErrors.desiredWeight = 'Desired weight is required';
    if (!bloodType) newErrors.bloodType = 'Blood type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', {
        height,
        age,
        currentWeight,
        desiredWeight,
        bloodType,
      });
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Height *"
          value={height}
          onChange={e => setHeight(e.target.value)}
          className={styles.input}
        />
        {errors.height && <span className={styles.error}>{errors.height}</span>}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Age *"
          value={age}
          onChange={e => setAge(e.target.value)}
          className={styles.input}
        />
        {errors.age && <span className={styles.error}>{errors.age}</span>}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Current weight *"
          value={currentWeight}
          onChange={e => setCurrentWeight(e.target.value)}
          className={styles.input}
        />
        {errors.currentWeight && (
          <span className={styles.error}>{errors.currentWeight}</span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Desired weight *"
          value={desiredWeight}
          onChange={e => setDesiredWeight(e.target.value)}
          className={styles.input}
        />
        {errors.desiredWeight && (
          <span className={styles.error}>{errors.desiredWeight}</span>
        )}
      </div>
      <div className={`${styles.inputGroup} ${styles.bloodTypeGroup}`}>
        <h2 className={styles.inputRadio}>Blood type *</h2>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="bloodType"
              value="1"
              checked={bloodType === '1'}
              onChange={e => setBloodType(e.target.value)}
              className={styles.radioColor}
            />
            <span className={styles.customRadio}></span> 1
          </label>
          <label>
            <input
              type="radio"
              name="bloodType"
              value="2"
              checked={bloodType === '2'}
              onChange={e => setBloodType(e.target.value)}
              className={styles.radioColor}
            />
            <span className={styles.customRadio}></span> 2
          </label>
          <label>
            <input
              type="radio"
              name="bloodType"
              value="3"
              checked={bloodType === '3'}
              onChange={e => setBloodType(e.target.value)}
              className={styles.radioColor}
            />
            <span className={styles.customRadio}></span> 3
          </label>
          <label>
            <input
              type="radio"
              name="bloodType"
              value="4"
              checked={bloodType === '4'}
              onChange={e => setBloodType(e.target.value)}
              className={styles.radioColor}
            />
            <span className={styles.customRadio}></span> 4
          </label>
        </div>
        {errors.bloodType && (
          <span className={styles.error}>{errors.bloodType}</span>
        )}
      </div>
      <div className={styles.submitButtonContainer}>
        <button type="submit" className={styles.submitButton}>
          Calculate
        </button>
      </div>
    </form>
  );
};

export default CalculatorCalorieForm;
