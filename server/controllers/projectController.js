const { validationResult } = require('express-validator');
const Project = require('../models/Project');
const asyncHandler = require('../utils/asyncHandler');

const listProjects = asyncHandler(async (req, res) => {
  const { category, featured } = req.query;
  const filter = {};
  if (category && category !== 'All') filter.category = new RegExp(category, 'i');
  if (featured !== undefined) filter.featured = featured === 'true';
  const projects = await Project.find(filter).sort({ featured: -1, createdAt: -1 });
  res.json({ success: true, count: projects.length, data: projects });
});

const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) {
    res.status(404);
    throw new Error('Project not found.');
  }
  res.json({ success: true, data: project });
});

const createProject = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const project = await Project.create(req.body);
  return res.status(201).json({ success: true, data: project });
});

const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!project) {
    res.status(404);
    throw new Error('Project not found.');
  }
  res.json({ success: true, data: project });
});

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project not found.');
  }
  res.json({ success: true, message: 'Project deleted.' });
});

module.exports = { listProjects, getProject, createProject, updateProject, deleteProject };
