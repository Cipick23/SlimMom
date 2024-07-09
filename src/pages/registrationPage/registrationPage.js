// RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../router/authContext.js';
import axios from 'axios';

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
        'http://localhost:3000/api/users/signup',
        {
          email,
          password,
        }
      );

      if (response.status === 201) {
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

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
