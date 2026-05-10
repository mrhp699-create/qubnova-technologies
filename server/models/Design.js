const mongoose = require('mongoose');

const designSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, default: '' },
    toolsUsed: [{ type: String, trim: true }],
    purpose: { type: String, default: '' },
    description: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Design', designSchema);
