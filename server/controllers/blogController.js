const Blog = require('../models/Blog');
const { createCrudController } = require('./controllerUtils');

const controller = createCrudController(Blog, {
  listFilter: { published: true },
  notFoundMessage: 'Blog not found.',
});

module.exports = {
  createBlog: controller.createOne,
  deleteBlog: controller.deleteOne,
  getBlogBySlug: controller.getOneByLookup,
  getBlogs: controller.getAll,
  updateBlog: controller.updateOne,
};
