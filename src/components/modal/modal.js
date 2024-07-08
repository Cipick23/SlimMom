// modal.js
import React from 'react';
import styles from './modal.module.css';
import { useEffect } from 'react';
// import { useAuth } from './../../index.js';
// import { Navigate } from '../../../node_modules/react-router-dom/dist/index';
// import { useNavigate } from 'react-router-dom';

const Modal = ({ show, onClose }) => {
  // const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = e => {
      if (e.target.classList.contains(styles.modalOverlay)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [show, onClose]);

  const handleStartLosingWeight = () => {
    onClose(); // Închidem modalul
    // if (!isAuthenticated) {
    //   Navigate('/login'); // Redirecționăm către pagina de login doar dacă nu este autentificat
    // }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <main>
          <h2>Your recommended daily calorie intake is</h2>
          <div>
            2800 <span>Kcal</span>Kcal
          </div>
          <h3>Foods you should not eat</h3>
          <div>''</div>
          <div className={styles.submitButtonContainer}>
            <button
              type="button"
              className={`${styles.commonButton} ${styles.submitButton}`}
              onClick={handleStartLosingWeight}
            >
              <span className={styles.buttonStart}>Start losing weight</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Modal;
