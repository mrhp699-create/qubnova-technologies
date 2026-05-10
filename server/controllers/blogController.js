const { validationResult } = require('express-validator');
const Blog = require('../models/Blog');
const asyncHandler = require('../utils/asyncHandler');

const listBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json({ success: true, count: blogs.length, data: blogs });
});

const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) {
    res.status(404);
    throw new Error('Blog not found.');
  }
  res.json({ success: true, data: blog });
});

const createBlog = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const blog = await Blog.create(req.body);
  return res.status(201).json({ success: true, data: blog });
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!blog) {
    res.status(404);
    throw new Error('Blog not found.');
  }
  res.json({ success: true, data: blog });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error('Blog not found.');
  }
  res.json({ success: true, message: 'Blog deleted.' });
});

module.exports = { listBlogs, getBlog, createBlog, updateBlog, deleteBlog };
