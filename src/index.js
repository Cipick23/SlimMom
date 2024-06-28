// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
// import { store } from './redux/store';
// import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Registration from 'pages/registrationPage/registration';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
