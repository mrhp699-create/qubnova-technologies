const { validationResult } = require('express-validator');
const Service = require('../models/Service');
const asyncHandler = require('../utils/asyncHandler');

const listServices = asyncHandler(async (req, res) => {
  const services = await Service.find().sort({ createdAt: 1 });
  res.json({ success: true, count: services.length, data: services });
});

const createService = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const service = await Service.create(req.body);
  return res.status(201).json({ success: true, data: service });
});

const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!service) {
    res.status(404);
    throw new Error('Service not found.');
  }
  res.json({ success: true, data: service });
});

const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error('Service not found.');
  }
  res.json({ success: true, message: 'Service deleted.' });
});

module.exports = { listServices, createService, updateService, deleteService };
