// src/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import passport from 'passport';
// import User from './../models/user.js';

const secretForToken = process.env.JWT_SECRET;

export function getPayloadFromJWT(token) {
  try {
    const payload = jwt.verify(token, secretForToken);
    return payload;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function validateAuth(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Unauthorized',
        data: 'Unauthorized',
      });
    }
    req.user = user;
    next();
  })(req, res, next);
}

export function validateJWT(token) {
  try {
    let isAuthenticated = false;

    jwt.verify(token, secretForToken, (err, _decoded) => {
      if (err) {
        throw new Error(err);
      }
      isAuthenticated = true;
    });

    return isAuthenticated;
  } catch (err) {
    console.error(err);
    return false;
  }
}
