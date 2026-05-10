const createCrudController = (Model, options = {}) => {
  const {
    listFilter = {},
    listSort = '-createdAt',
    lookupField = 'slug',
    notFoundMessage = 'Resource not found.',
  } = options;

  const getAll = async (req, res, next) => {
    try {
      const filter = typeof listFilter === 'function' ? listFilter(req) : listFilter;
      const items = await Model.find(filter).sort(listSort);
      res.json(items);
    } catch (error) {
      next(error);
    }
  };

  const getOneByLookup = async (req, res, next) => {
    try {
      const item = await Model.findOne({ [lookupField]: req.params[lookupField] });

      if (!item) {
        res.status(404);
        next(new Error(notFoundMessage));
        return;
      }

      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  const createOne = async (req, res, next) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  };

  const updateOne = async (req, res, next) => {
    try {
      const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!item) {
        res.status(404);
        next(new Error(notFoundMessage));
        return;
      }

      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  const deleteOne = async (req, res, next) => {
    try {
      const item = await Model.findByIdAndDelete(req.params.id);

      if (!item) {
        res.status(404);
        next(new Error(notFoundMessage));
        return;
      }

      res.json({ message: 'Resource deleted successfully.' });
    } catch (error) {
      next(error);
    }
  };

  return { createOne, deleteOne, getAll, getOneByLookup, updateOne };
};

module.exports = { createCrudController };
