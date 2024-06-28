// DailyCaloriesForm.js
import React, { useState } from 'react';
import Modal from '../modal/modal.js';
import { useNavigate } from 'react-router-dom';
import sharedStyles from './../../utils/shared.module.css';
import { useAuth } from 'router/authContext';
import styles from './dailyCaloriesForm.module.css';

const DailyCaloriesForm = () => {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStartLosingWeight = () => {
    if (isAuthenticated) {
      navigate('/home');
    } else {
      navigate('/login');
    }
    closeModal(); // Închidem modalul după redirecționare
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.calorieTitle}>
        Calculate your daily calorie intake right now
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Height *" className={styles.input} />
          <div className={styles.vectorInput}></div>
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Age *" className={styles.input} />
          <div className={styles.vectorInput}></div>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Current weight *"
            className={styles.input}
          />
          <div className={styles.vectorInput}></div>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Desired weight *"
            className={styles.input}
          />
          <div className={styles.vectorInput}></div>
        </div>
        <div className={`${styles.inputGroup} ${styles.bloodTypeGroup}`}>
          <h2 className={styles.inputRadio}>Blood type *</h2>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="bloodType"
                value="1"
                className={styles.radioColor}
              />
              <span className={styles.customRadio}></span> 1
            </label>
            <label>
              <input type="radio" name="bloodType" value="2" />
              <span className={styles.customRadio}></span> 2
            </label>
            <label>
              <input type="radio" name="bloodType" value="3" />
              <span className={styles.customRadio}></span> 3
            </label>
            <label>
              <input type="radio" name="bloodType" value="4" />
              <span className={styles.customRadio}></span> 4
            </label>
          </div>
        </div>
        <div className={styles.submitButtonContainer}>
          <button type="submit" className={`${sharedStyles.commonButton}`}>
            <span className={styles.buttonStart}>Start losing weight</span>
          </button>
        </div>
      </form>
      <Modal show={showModal} onClose={closeModal}>
        <h2>Ready to start losing weight?</h2>
        <button
          onClick={handleStartLosingWeight}
          className={`${sharedStyles.commonButton}`}
        >
          Start Now
        </button>
      </Modal>
    </div>
  );
};

export default DailyCaloriesForm;
