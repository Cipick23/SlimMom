import { useNavigate } from 'react-router-dom';
import Logo from './logo/logo.js';
import styles from './navigation.module.css';

function Navigation() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegistration = () => {
    navigate('/registration');
  };

  return (
    <nav className={styles.layoutHeader}>
      <div onClick={goToHome} className={styles.linkLogo}>
        <Logo />
      </div>
      <div className={styles.vector}></div>
      <div onClick={goToLogin} className={styles.linkLogin}>
        Log in
      </div>
      <div onClick={goToRegistration} className={styles.linkRegistration}>
        Registration
      </div>
    </nav>
  );
}

export default Navigation;
