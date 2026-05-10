const express = require('express');
const {
  createProject,
  deleteProject,
  getProjectBySlug,
  getProjects,
  updateProject,
} = require('../controllers/projectController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();
const admin = [protect, adminOnly];

router.route('/').get(getProjects).post(admin, createProject);
router.route('/:slug').get(getProjectBySlug);
router.route('/:id').put(admin, updateProject).delete(admin, deleteProject);

module.exports = router;
