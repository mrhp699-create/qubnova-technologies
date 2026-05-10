const express = require('express');
const { body } = require('express-validator');
const { listProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
const projectValidation = [body('title').trim().notEmpty(), body('category').trim().notEmpty(), body('description').trim().notEmpty()];

router.route('/').get(listProjects).post(protect, adminOnly, projectValidation, createProject);
router.route('/:id').put(protect, adminOnly, updateProject).delete(protect, adminOnly, deleteProject);
router.get('/:slug', getProject);

module.exports = router;
