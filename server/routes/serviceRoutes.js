const express = require('express');
const {
  createService,
  deleteService,
  getServices,
  updateService,
} = require('../controllers/serviceController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();
const admin = [protect, adminOnly];

router.route('/').get(getServices).post(admin, createService);
router.route('/:id').put(admin, updateService).delete(admin, deleteService);

module.exports = router;
