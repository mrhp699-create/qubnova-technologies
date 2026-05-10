const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true, trim: true },
    role: { type: String, default: '', trim: true },
    company: { type: String, default: '', trim: true },
    message: { type: String, required: true, trim: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    image: { type: String, default: '' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
