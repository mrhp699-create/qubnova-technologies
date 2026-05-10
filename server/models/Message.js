const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '', trim: true },
    projectType: { type: String, required: true, trim: true },
    budget: { type: String, default: '', trim: true },
    timeline: { type: String, default: '', trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ['unread', 'read'], default: 'unread' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Message', messageSchema);
