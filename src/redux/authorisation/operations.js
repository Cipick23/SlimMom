// src/redux/authorisation/operations.js
import axios from 'axios';
import { loginSuccess, loginFailure, logout } from './slice';

export const login = (email, password) => async dispatch => {
  try {
    const response = await axios.post('/api/login', { email, password });
    dispatch(
      loginSuccess({ user: response.data.user, token: response.data.token })
    );
  } catch (error) {
    dispatch(loginFailure({ error: error.response.data.message }));
  }
};

export const register = (name, email, password) => async dispatch => {
  try {
    const response = await axios.post('/api/register', {
      name,
      email,
      password,
    });
    dispatch(
      loginSuccess({ user: response.data.user, token: response.data.token })
    );
  } catch (error) {
    dispatch(loginFailure({ error: error.response.data.message }));
  }
};

export const logoutUser = () => dispatch => {
  dispatch(logout());
};
