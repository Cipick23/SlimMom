// RegistrationPage.js

import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../router/authContext.js';

const RegistrationPage = () => {
  // const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleRegister = async e => {
    e.preventDefault();

    // try {
    //   const response = await AuthController.signup(name, email, password);

    //   if (response.message === 'User created successfully') {
    //     navigate('/login'); // Redirecționăm către pagina de login
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    <div>
      <h2>Register</h2>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          // value={name}
          // onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          // value={email}
          // onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          // value={password}
          // onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
