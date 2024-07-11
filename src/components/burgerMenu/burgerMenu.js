// BurgerMenu.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './burgerMenu.module.css';
import { useLocation } from '../../../node_modules/react-router-dom/dist/index';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/user/diary') {
      setActiveMenu('diary');
    } else if (location.pathname === '/calculator') {
      setActiveMenu('calculator');
    } else {
      setActiveMenu('');
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToPage = path => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className={styles.burgerMenu}>
      {isOpen ? (
        <button onClick={toggleMenu} className={styles.closeButton}>
          &times;
        </button>
      ) : (
        <div className={styles.burger} onClick={toggleMenu}>
          &#9776;
        </div>
      )}
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleMenu}></div>
          <div className={styles.menu}>
            <div
              onClick={() => goToPage('/diary')}
              className={`${styles.menuItem} ${
                activeMenu === 'diary' ? styles.active : ''
              }`}
            >
              Diary
            </div>
            <div
              onClick={() => goToPage('/calculator')}
              className={`${styles.menuItem} ${
                activeMenu === 'calculator' ? styles.active : ''
              }`}
            >
              Calculator
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
