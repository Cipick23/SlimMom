// Registration.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../router/authContext';
import sharedStyles from '../../utils/shared.module.css';

const Registration = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Implementează aici logica pentru înregistrare
      const userData = {
        name,
        email,
        password,
      };
      await register(userData);
      navigate('/home'); // După înregistrare, redirecționează utilizatorul către pagina principală
    } catch (error) {
      setError('Registration failed. Please try again.'); // Poți gestiona diferite tipuri de erori aici
    }
  };

  const handleLoginRedirect = () => {
    navigate('/logIn'); // Redirecționează utilizatorul către pagina de login în cazul în care deja are un cont
  };

  return (
    <div className={sharedStyles.modalForm}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className={sharedStyles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className={sharedStyles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={sharedStyles.formGroup}>
          <label htmlFor="password">Password *</label>
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
          <button type="submit" className={sharedStyles.commonButton}>
            Register
          </button>
        </div>
      </form>
      <div className={sharedStyles.submitButtonContainer}>
        <button
          type="button"
          className={sharedStyles.commonButton}
          onClick={handleLoginRedirect}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Registration;
