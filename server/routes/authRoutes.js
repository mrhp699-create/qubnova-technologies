const express = require('express');
const { body } = require('express-validator');
const { login, registerAdmin, me } = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', [body('email').isEmail().normalizeEmail(), body('password').notEmpty()], login);
router.post(
  '/register-admin',
  [body('email').isEmail().normalizeEmail(), body('password').isLength({ min: 8 }), body('name').optional().trim()],
  registerAdmin,
);
router.get('/me', protect, adminOnly, me);

module.exports = router;
