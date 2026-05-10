const Design = require('../models/Design');
const { createCrudController } = require('./controllerUtils');

const controller = createCrudController(Design, {
  listFilter: { published: true },
  notFoundMessage: 'Design not found.',
});

module.exports = {
  createDesign: controller.createOne,
  deleteDesign: controller.deleteOne,
  getDesigns: controller.getAll,
  updateDesign: controller.updateOne,
};
