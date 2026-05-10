const Message = require('../models/Message');
const { createCrudController } = require('./controllerUtils');

const controller = createCrudController(Message, {
  notFoundMessage: 'Message not found.',
});

const markMessageRead = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true, runValidators: true }
    );

    if (!message) {
      res.status(404);
      next(new Error('Message not found.'));
      return;
    }

    res.json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessage: controller.createOne,
  deleteMessage: controller.deleteOne,
  getMessages: controller.getAll,
  markMessageRead,
};
