const Testimonial = require('../models/Testimonial');
const { createCrudController } = require('./controllerUtils');

const controller = createCrudController(Testimonial, {
  listFilter: { published: true },
  notFoundMessage: 'Testimonial not found.',
});

module.exports = {
  createTestimonial: controller.createOne,
  deleteTestimonial: controller.deleteOne,
  getTestimonials: controller.getAll,
  updateTestimonial: controller.updateOne,
};
