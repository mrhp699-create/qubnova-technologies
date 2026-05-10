const express = require('express');
const {
  createDesign,
  deleteDesign,
  getDesigns,
  updateDesign,
} = require('../controllers/designController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();
const admin = [protect, adminOnly];

router.route('/').get(getDesigns).post(admin, createDesign);
router.route('/:id').put(admin, updateDesign).delete(admin, deleteDesign);

module.exports = router;
