const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured.');
  }

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

const sanitizeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
});

const registerAdmin = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      next(new Error('Name, email, and password are required.'));
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409);
      next(new Error('An admin with this email already exists.'));
      return;
    }

    const user = await User.create({ email, name, password, role: 'admin' });

    res.status(201).json({
      token: signToken(user._id),
      user: sanitizeUser(user),
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      next(new Error('Email and password are required.'));
      return;
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      res.status(401);
      next(new Error('Invalid email or password.'));
      return;
    }

    res.json({
      token: signToken(user._id),
      user: sanitizeUser(user),
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res) => {
  res.json({ user: sanitizeUser(req.user) });
};

module.exports = { getMe, login, registerAdmin };
