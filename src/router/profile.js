// backend/routes/profile.js
import express from 'express';
import passport from '../passportConfig.js';

const router = express.Router();

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
  }
);

export default router;
