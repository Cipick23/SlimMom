// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authorisation/slice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
