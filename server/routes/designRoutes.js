const express = require('express');
const { body } = require('express-validator');
const { listDesigns, createDesign, updateDesign, deleteDesign } = require('../controllers/designController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
const designValidation = [body('title').trim().notEmpty(), body('category').trim().notEmpty(), body('description').trim().notEmpty()];

router.route('/').get(listDesigns).post(protect, adminOnly, designValidation, createDesign);
router.route('/:id').put(protect, adminOnly, updateDesign).delete(protect, adminOnly, deleteDesign);

module.exports = router;
