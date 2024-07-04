// RegistrationPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../router/authContext.js';
import Registration from './../../router/api/register.js';

const RegistrationPage = () => {
  // const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/'); // Redirecționează către pagina principală după înregistrare
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <Registration onRegisterSuccess={handleRegisterSuccess} />{' '}
      {/* Transmiti callback pentru gestionarea înregistrării cu succes */}
    </div>
  );
};

export default RegistrationPage;
