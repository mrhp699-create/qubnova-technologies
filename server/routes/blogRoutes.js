const express = require('express');
const {
  createBlog,
  deleteBlog,
  getBlogBySlug,
  getBlogs,
  updateBlog,
} = require('../controllers/blogController');
const { adminOnly, protect } = require('../middleware/authMiddleware');

const router = express.Router();
const admin = [protect, adminOnly];

router.route('/').get(getBlogs).post(admin, createBlog);
router.route('/:slug').get(getBlogBySlug);
router.route('/:id').put(admin, updateBlog).delete(admin, deleteBlog);

module.exports = router;
