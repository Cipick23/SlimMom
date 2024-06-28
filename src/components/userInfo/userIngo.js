import React from 'react';
import styles from './userInfo.module.css';

const UserInfo = ({ userName }) => (
  <div className={styles.userInfo}>
    <span className={styles.userName}>{userName}</span>
  </div>
);

export default UserInfo;
