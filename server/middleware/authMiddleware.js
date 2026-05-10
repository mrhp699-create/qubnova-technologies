const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';

  if (!authHeader.startsWith('Bearer ')) {
    res.status(401);
    next(new Error('Not authorized. No token provided.'));
    return;
  }

  const token = authHeader.split(' ')[1];

  if (!process.env.JWT_SECRET) {
    res.status(500);
    next(new Error('JWT_SECRET is not configured.'));
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      res.status(401);
      next(new Error('Not authorized. User no longer exists.'));
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    next(new Error('Not authorized. Token failed.'));
  }
};

const adminOnly = (req, res, next) => {
  if (req.user?.role === 'admin') {
    next();
    return;
  }

  res.status(403);
  next(new Error('Admin access is required.'));
};

module.exports = { adminOnly, protect };
