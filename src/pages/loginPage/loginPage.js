// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './login.module.css';

// Configurare baza URL pentru Axios (schimbă localhost:3001 cu adresa corectă a backend-ului tău)
// axios.defaults.baseURL = 'http://localhost:3000/';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/login',
        {
          email,
          password,
        }
      );

      console.log('Response from server:', response); // Debugging line

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); // Stocăm token-ul în localStorage
        setSuccess('User logged in successfully');
        setError('');
        // Redirecționează utilizatorul către pagina de profil sau altă pagină
        setTimeout(() => navigate('/'), 2000); // Redirecționează după 2 secunde
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Error during login:', error); // Debugging line

      if (error.response) {
        // Server responded with a status other than 200 range
        setError(error.response.data.message || 'An error occurred');
      } else if (error.request) {
        // Request was made but no response received
        setError('No response received from server');
      } else {
        // Something happened in setting up the request
        setError('Error in setting up the request');
      }

      setSuccess('');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.loginName}>Login</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {success && <p className={styles.successMessage}>{success}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <button onClick={goToRegister} className={styles.registerButton}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
