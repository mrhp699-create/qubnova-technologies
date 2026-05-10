const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Service title is required.'], trim: true, maxlength: 160 },
    slug: { type: String, required: [true, 'Service slug is required.'], unique: true, lowercase: true, trim: true },
    summary: { type: String, required: [true, 'Service summary is required.'], trim: true, maxlength: 300 },
    description: { type: String, required: [true, 'Service description is required.'], trim: true },
    icon: { type: String, trim: true, default: '' },
    features: [{ type: String, trim: true }],
    priceLabel: { type: String, trim: true, default: '' },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);
