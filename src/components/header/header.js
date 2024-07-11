// header.js
import React from 'react';
import Navigation from '../navigation/navigation.js';
import styles from './header.module.css';
import BurgerMenu from './../burgerMenu/burgerMenu.js';
import UserInfo from './../userInfo/userInfo.js';
import Logo from './../logo/logo.js';

const Header = ({ isAuthenticated, userName, onLogout }) => {
  console.log('Header - isAuthenticated:', isAuthenticated);
  console.log('Header - userName:', userName);

  return (
    <header className={styles.header}>
      {isAuthenticated ? (
        <>
          <div className={styles.topContainer}>
            <Logo />
            <div className={styles.userInfoContainer}>
              <UserInfo userName={userName} onLogout={onLogout} />
            </div>
            <BurgerMenu className={styles.burger} />
          </div>
          <div className={styles.mobileVector}></div>
        </>
      ) : (
        <Navigation
          isAuthenticated={isAuthenticated}
          userName={userName}
          onLogout={onLogout}
        />
      )}
    </header>
  );
};

export default Header;
