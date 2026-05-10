const express = require('express');
const { body } = require('express-validator');
const { createMessage, listMessages, markMessageRead, deleteMessage } = require('../controllers/messageController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
const messageValidation = [
  body('name').trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('projectType').trim().notEmpty(),
  body('message').trim().notEmpty(),
];

router.route('/').post(messageValidation, createMessage).get(protect, adminOnly, listMessages);
router.put('/:id/read', protect, adminOnly, markMessageRead);
router.delete('/:id', protect, adminOnly, deleteMessage);

module.exports = router;
