import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './registration.module.css'; // Importă stilurile CSS

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/signup',
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 201) {
        const token = response.data.data.token;
        localStorage.setItem('token', token); // Stocăm token-ul în localStorage
        localStorage.setItem('userName', name);
        setSuccess('User registered successfully');
        setError('');
        // Redirecționează utilizatorul către pagina de login
        setTimeout(() => navigate('/login'), 2000); // Redirecționează după 2 secunde
      }
    } catch (error) {
      setSuccess('');
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.registerName}>Register</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {success && <p className={styles.successMessage}>{success}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.inputField}
          required
        />
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
            Register
          </button>
          <button onClick={goToLogin} className={styles.loginButton}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
