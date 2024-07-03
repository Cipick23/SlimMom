// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { store } from './redux/store.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from '../node_modules/react-redux/dist/react-redux.js';
import connectToDb from './../utils/connectToDb.js';

connectToDb();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
