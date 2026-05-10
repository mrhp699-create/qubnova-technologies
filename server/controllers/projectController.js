const Project = require('../models/Project');
const { createCrudController } = require('./controllerUtils');

const controller = createCrudController(Project, {
  listFilter: { published: true },
  notFoundMessage: 'Project not found.',
});

module.exports = {
  createProject: controller.createOne,
  deleteProject: controller.deleteOne,
  getProjectBySlug: controller.getOneByLookup,
  getProjects: controller.getAll,
  updateProject: controller.updateOne,
};
