const { validationResult } = require('express-validator');
const Message = require('../models/Message');
const asyncHandler = require('../utils/asyncHandler');

const createMessage = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const message = await Message.create(req.body);
  return res.status(201).json({ success: true, data: message, message: 'Project request received.' });
});

const listMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json({ success: true, count: messages.length, data: messages });
});

const markMessageRead = asyncHandler(async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, { status: 'read' }, { new: true });
  if (!message) {
    res.status(404);
    throw new Error('Message not found.');
  }
  res.json({ success: true, data: message });
});

const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findByIdAndDelete(req.params.id);
  if (!message) {
    res.status(404);
    throw new Error('Message not found.');
  }
  res.json({ success: true, message: 'Message deleted.' });
});

module.exports = { createMessage, listMessages, markMessageRead, deleteMessage };
