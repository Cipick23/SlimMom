// Login.js
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async e => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('http://localhost:3000/users/login', {
    //     email,
    //     password,
    //   });

    //   if (response.data.token) {
    //     localStorage.setItem('token', response.data.token);
    //     setSuccessMessage('Utilizatorul a fost logat cu succes.');
    //     setError('');
    //     navigate('/'); // Redirecționează către pagina principală după autentificare
    //   }
    // } catch (error) {
    //   setSuccessMessage('');
    //   setError(error.response.data.message);
    // }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} */}
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
