const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    features: [{ type: String, trim: true }],
    icon: { type: String, default: 'Sparkles' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Service', serviceSchema);
