const { validationResult } = require('express-validator');
const Design = require('../models/Design');
const asyncHandler = require('../utils/asyncHandler');

const listDesigns = asyncHandler(async (req, res) => {
  const filter = req.query.category && req.query.category !== 'All' ? { category: new RegExp(req.query.category, 'i') } : {};
  const designs = await Design.find(filter).sort({ createdAt: -1 });
  res.json({ success: true, count: designs.length, data: designs });
});

const createDesign = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const design = await Design.create(req.body);
  return res.status(201).json({ success: true, data: design });
});

const updateDesign = asyncHandler(async (req, res) => {
  const design = await Design.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!design) {
    res.status(404);
    throw new Error('Design item not found.');
  }
  res.json({ success: true, data: design });
});

const deleteDesign = asyncHandler(async (req, res) => {
  const design = await Design.findByIdAndDelete(req.params.id);
  if (!design) {
    res.status(404);
    throw new Error('Design item not found.');
  }
  res.json({ success: true, message: 'Design item deleted.' });
});

module.exports = { listDesigns, createDesign, updateDesign, deleteDesign };
