const { validationResult } = require('express-validator');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const generateToken = require('../utils/generateToken');

const sendAuthResponse = (res, user, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    token: generateToken(user),
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
};

const login = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });

  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password.');
  }

  return sendAuthResponse(res, user);
});

const registerAdmin = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });

  const { name = 'Qubnova Admin', email, password, setupKey } = req.body;
  const requiredSetupKey = process.env.ADMIN_SETUP_KEY;

  if (requiredSetupKey && setupKey !== requiredSetupKey) {
    res.status(403);
    throw new Error('Invalid admin setup key.');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409);
    throw new Error('An admin already exists with this email.');
  }

  const user = await User.create({ name, email, password, role: 'admin' });
  return sendAuthResponse(res, user, 201);
});

const me = asyncHandler(async (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = { login, registerAdmin, me };
