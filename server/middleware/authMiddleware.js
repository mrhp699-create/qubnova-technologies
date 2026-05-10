const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.split(' ')[1] : null;

  if (!token) {
    res.status(401);
    throw new Error('Not authorized. Token is required.');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET || 'qubnova-dev-secret');
  const user = await User.findById(decoded.id).select('-password');

  if (!user) {
    res.status(401);
    throw new Error('Not authorized. User no longer exists.');
  }

  req.user = user;
  next();
});

const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403);
    throw new Error('Admin access required.');
  }
  next();
};

module.exports = { protect, adminOnly };
