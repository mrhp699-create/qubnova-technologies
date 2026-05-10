const Service = require('../models/Service');
const { createCrudController } = require('./controllerUtils');

const controller = createCrudController(Service, {
  listFilter: { published: true },
  listSort: 'order -createdAt',
  notFoundMessage: 'Service not found.',
});

module.exports = {
  createService: controller.createOne,
  deleteService: controller.deleteOne,
  getServices: controller.getAll,
  updateService: controller.updateOne,
};
