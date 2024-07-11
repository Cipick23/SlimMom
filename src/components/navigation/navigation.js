import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../logo/logo.js';
import styles from './navigation.module.css';
import UserInfo from '../userInfo/userInfo.js';

function Navigation({ isAuthenticated, userName, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    navigate('/');
  };

  const isActive = path => location.pathname === path;

  const goToDiary = () => {
    navigate('/diary');
  };

  const goToCalculator = () => {
    navigate('/calculator');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegistration = () => {
    navigate('/registration');
  };

  return (
    <nav className={styles.navigation}>
      <div onClick={goToHome} className={styles.linkLogo}>
        <Logo />
      </div>
      <div className={styles.vector}></div>
      {isAuthenticated ? (
        <>
          <div
            onClick={goToDiary}
            className={`${styles.linkLogin} ${
              isActive('/diary') ? styles.active : ''
            }`}
          >
            Diary
          </div>
          <div
            onClick={goToCalculator}
            className={`${styles.linkLogin} ${
              isActive('/calculator') ? styles.active : ''
            }`}
          >
            Calculator
          </div>
          <UserInfo userName={userName} onLogout={onLogout} />
        </>
      ) : (
        <>
          <div
            onClick={goToLogin}
            className={`${styles.linkLogin} ${
              isActive('/login') ? styles.active : ''
            }`}
          >
            Log in
          </div>
          <div
            onClick={goToRegistration}
            className={`${styles.linkRegistration} ${
              isActive('/registration') ? styles.active : ''
            }`}
          >
            Registration
          </div>
        </>
      )}
    </nav>
  );
}

export default Navigation;
