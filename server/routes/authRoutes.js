const express = require('express');
const { getMe, login, registerAdmin } = require('../controllers/authController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/register-admin', registerAdmin);
router.get('/me', protect, adminOnly, getMe);

module.exports = router;
