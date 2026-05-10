const express = require('express');
const { body } = require('express-validator');
const { listServices, createService, updateService, deleteService } = require('../controllers/serviceController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
const serviceValidation = [body('title').trim().notEmpty(), body('category').trim().notEmpty(), body('description').trim().notEmpty()];

router.route('/').get(listServices).post(protect, adminOnly, serviceValidation, createService);
router.route('/:id').put(protect, adminOnly, updateService).delete(protect, adminOnly, deleteService);

module.exports = router;
