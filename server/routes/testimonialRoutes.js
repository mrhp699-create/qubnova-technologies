const express = require('express');
const { body } = require('express-validator');
const { listTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
const testimonialValidation = [body('clientName').trim().notEmpty(), body('message').trim().notEmpty(), body('rating').optional().isInt({ min: 1, max: 5 })];

router.route('/').get(listTestimonials).post(protect, adminOnly, testimonialValidation, createTestimonial);
router.route('/:id').put(protect, adminOnly, updateTestimonial).delete(protect, adminOnly, deleteTestimonial);

module.exports = router;
