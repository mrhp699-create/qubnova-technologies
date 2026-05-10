const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Client name is required.'], trim: true, maxlength: 120 },
    role: { type: String, trim: true, default: '' },
    company: { type: String, trim: true, default: '' },
    quote: { type: String, required: [true, 'Testimonial quote is required.'], trim: true, maxlength: 1200 },
    avatar: { type: String, trim: true, default: '' },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
