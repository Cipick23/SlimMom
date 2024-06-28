// Login.js
import React, { useState } from 'react';
import { useAuth } from '../../router/authContext';
import { useNavigate } from 'react-router-dom';
import sharedStyles from '../../utils/shared.module.css';

const Login = ({ onClose }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    // Simulăm o verificare a credențialelor
    if (username === 'demo' && password === 'demo') {
      login(); // Autentificare reușită
      onClose(); // Închidem modalul de login
      navigate('/home'); // Redirecționăm către pagina principală
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegister = () => {
    navigate('/registration'); // Redirecționăm către pagina de înregistrare
  };

  return (
    <div className={sharedStyles.modalForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={sharedStyles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={sharedStyles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={sharedStyles.error}>{error}</p>}
        <div className={sharedStyles.submitButtonContainer}>
          <button type="submit" className={`${sharedStyles.commonButton}`}>
            Login
          </button>
        </div>
      </form>
      <div className={sharedStyles.submitButtonContainer}>
        <button
          type="button"
          className={`${sharedStyles.commonButton}`}
          onClick={handleRegister}
        >
          Înregistrare
        </button>
      </div>
    </div>
  );
};

export default Login;
