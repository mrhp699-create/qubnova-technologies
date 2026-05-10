const express = require('express');
const { body } = require('express-validator');
const { listBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
const blogValidation = [body('title').trim().notEmpty(), body('category').trim().notEmpty(), body('excerpt').trim().notEmpty(), body('content').trim().notEmpty()];

router.route('/').get(listBlogs).post(protect, adminOnly, blogValidation, createBlog);
router.route('/:id').put(protect, adminOnly, updateBlog).delete(protect, adminOnly, deleteBlog);
router.get('/:slug', getBlog);

module.exports = router;
