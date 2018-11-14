const taskService = require("./service");

function getAll(req, res, next) {
  taskService
    .getAll()
    .then((tasks) => res.json(tasks))
    .catch((err) => next(err));
}

function getByUserId(req, res, next) {
  taskService
    .getByUserId(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => next(err));
}

function getByProjectId(req, res, next) {
  taskService
    .getByProjectId(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  taskService
    .getById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => next(err));
}

function create(req, res, next) {
  taskService
    .create(req.user.sub, req.body)
    .then((task) => res.json(task))
    .catch((err) => next(err));
}

function update(req, res, next) {
  taskService
    .update(req.params.id, req.body)
    .then((task) => res.json(task))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  taskService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

module.exports = {
  getAll,
  getByUserId,
  getByProjectId,
  getById,
  create,
  update,
  delete: _delete
};
