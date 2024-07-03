// src/redux/authorisation/selectors.js
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectCurrentUser = state => state.auth.user;
export const selectAuthError = state => state.auth.error;
