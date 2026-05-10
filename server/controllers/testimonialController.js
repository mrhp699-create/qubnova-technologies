const { validationResult } = require('express-validator');
const Testimonial = require('../models/Testimonial');
const asyncHandler = require('../utils/asyncHandler');

const listTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json({ success: true, count: testimonials.length, data: testimonials });
});

const createTestimonial = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const testimonial = await Testimonial.create(req.body);
  return res.status(201).json({ success: true, data: testimonial });
});

const updateTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found.');
  }
  res.json({ success: true, data: testimonial });
});

const deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found.');
  }
  res.json({ success: true, message: 'Testimonial deleted.' });
});

module.exports = { listTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
