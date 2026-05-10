const express = require('express');
const {
  createTestimonial,
  deleteTestimonial,
  getTestimonials,
  updateTestimonial,
} = require('../controllers/testimonialController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();
const admin = [protect, adminOnly];

router.route('/').get(getTestimonials).post(admin, createTestimonial);
router.route('/:id').put(admin, updateTestimonial).delete(admin, deleteTestimonial);

module.exports = router;
