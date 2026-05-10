const express = require('express');
const {
  createMessage,
  deleteMessage,
  getMessages,
  markMessageRead,
} = require('../controllers/messageController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();
const admin = [protect, adminOnly];

router.route('/').post(createMessage).get(admin, getMessages);
router.route('/:id/read').put(admin, markMessageRead);
router.route('/:id').delete(admin, deleteMessage);

module.exports = router;
