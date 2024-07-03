// Login.js
import React from 'react';
import { useAuth } from '../../router/authContext.js';
import { useNavigate } from 'react-router-dom';
// import sharedStyles from '../../utils/shared.module.css';
import Login from './../../router/api/login.js';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirecționează către pagina principală după autentificare
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Login onLoginSuccess={handleLoginSuccess} />{' '}
      {/* Transmiti callback pentru gestionarea login-ului cu succes */}
    </div>
  );
};

export default LoginPage;
